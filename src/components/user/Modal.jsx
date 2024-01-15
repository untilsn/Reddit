import React, { Fragment } from "react";
import UserModalFill from "./UserModalFill";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase/firebaseConfigure";

const Modal = ({ modalRef, toggleModal }) => {
  const { userInfo } = useAuth();

  const handleCLickModal = (e) => {
    e.stopPropagation(); // ngan can khi bam modal no tat di basse
  };

  const handleSignOut = () => {
    if (auth.currentUser) {
      signOut(auth)
        .then(() => {
          toast.success("Log out success");
          console.log("Success");
        })
        .catch((error) => {
          console.error("Error during sign out:", error);
        });
    } else {
      console.error("No user is currently signed in.");
    }
  };
  return (
    <Fragment>
      <div
        ref={modalRef}
        onClick={handleCLickModal}
        className={`${
          toggleModal ? "visible opacity-100" : "invisible opacity-0"
        }  transition-all border border-border-color  rounded  absolute  flex flex-col h-[550px] w-full max-w-[260px] bg-main-dark-gray top-16  py-5 right-5`}
      >
        {/* online */}

        <NavLink to={`/user/${userInfo?.fullname}`}>
          <div className="flex items-center gap-4 px-5 py-4 text-base font-semibold text-text-primary text-[15px]">
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
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
            My Stuff
          </div>
          <UserModalFill>
            <span className="w-full max-w-[24px]"></span>
            profile
            <span>
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
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </span>
          </UserModalFill>
        </NavLink>

        <NavLink to={`/user/saved`}>
          <UserModalFill>
            <span className="w-full max-w-[24px]"></span>
            save
            <span>
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
                  d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                />
              </svg>
            </span>
          </UserModalFill>
        </NavLink>
        <UserModalFill>
          <span className="w-full max-w-[24px]"></span>
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
        <UserModalFill>
          <span className="w-full max-w-[24px]"></span>create new post
        </UserModalFill>
        <div className="w-full bg-border-color h-[1px]"></div>
        <UserModalFill onClick={handleSignOut}>
          <span className="">
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
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
              />
            </svg>
          </span>
          log out
        </UserModalFill>
      </div>
    </Fragment>
  );
};
export default Modal;
