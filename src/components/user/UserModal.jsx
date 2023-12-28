import { signOut } from "firebase/auth";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { auth } from "../../firebase/firebaseConfigure";
import Button from "../button/Button";
import { useAuth } from "../../context/auth-context";
import UserModalFill from "./UserModalFill";
import { toast } from "react-toastify";

const UserModal = () => {
  const { userInfo } = useAuth();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("log out success");
        console.log("suscess");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  const [toggleModal, setToggleModal] = useState(false);

  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
  };
  const handleCLickModal = (e) => {
    e.stopPropagation(); // ngan can khi bam modal no tat di basse
  };

  const modalRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Kiểm tra xem sự kiện click có xảy ra bên ngoài modal không
      modalRef.current && !modalRef.current.contains(e.target)
        ? setToggleModal(false)
        : setToggleModal(true);
    };
    // Đăng ký sự kiện click toàn cục khi modal mở
    if (toggleModal) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleModal]);

  return (
    <Fragment>
      <div
        ref={modalRef}
        onClick={handleToggleModal}
        className=" flex w-full max-w-[200px]  transition-all p-3 items-center justify-between   rounded-sm gap-5 avatar"
      >
        <div className="flex items-center gap-2 ">
          <div className="avatar-img max-w-[30px] h-[30px]">
            <img
              className="object-cover w-full h-full rounded-full"
              src={userInfo?.avatar}
              alt=""
            />
          </div>
          <div className="info">
            <h1 className="text-xs">{userInfo?.username}</h1>
            <span className="text-xs">Karma 0</span>
          </div>
        </div>
        <div className={`${toggleModal ? "" : "rotate-180"} transition-all`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        {/* modal */}
        <div
          ref={modalRef}
          onClick={handleCLickModal}
          className={`${
            toggleModal ? "visible opacity-100" : "invisible opacity-0"
          }  transition-all  rounded  absolute  flex flex-col h-[550px] w-full max-w-[250px] bg-main-dark top-20  py-5 right-5`}
        >
          {/* online */}
          <div>
            <UserModalFill>
              online status{" "}
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </UserModalFill>
          </div>
          <UserModalFill>profile</UserModalFill>
          <UserModalFill>create new post</UserModalFill>
          <div className="w-full bg-main-dark-lite h-[1px]"></div>
          <UserModalFill onClick={handleSignOut}>log out</UserModalFill>
        </div>
      </div>
    </Fragment>
  );
};

export default UserModal;
