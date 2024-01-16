import React, { Fragment, useEffect, useRef, useState } from "react";

import Modal from "./Modal";
import { useAuth } from "../../context/auth-context";

const UserModal = () => {
  const { userInfo } = useAuth();

  const [toggleModal, setToggleModal] = useState(false);

  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
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
        className=" flex w-full max-w-[200px]  z-10 transition-all py-3 pr-2  items-center justify-between  rounded-sm  avatar"
      >
        <div className="flex items-center gap-2 ">
          <div className="overflow-hidden max-w-[30px] w-full h-[30px] rounded-full avatar-img shadow-lg border border-border-color">
            <img
              className="object-cover h-full w-[30px]"
              src={userInfo?.avatar}
              alt=""
            />
          </div>
          <div className="info">
            <h1 className="text-sm font-bold px-1 overflow-hidden max-h-[16px] text-ellipsis">
              {userInfo?.fullname}
            </h1>
            <span className="flex items-center gap-1 mt-1 text-xs font-semibold normal-case text-text-primary">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    className="text-reddit-color"
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {userInfo?.karma} karma
            </span>
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
        <Modal toggleModal={toggleModal} modalRef={modalRef}></Modal>
      </div>
    </Fragment>
  );
};

export default UserModal;
