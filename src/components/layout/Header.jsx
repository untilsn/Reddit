import React, { Fragment, useState } from "react";
import AccessModal from "../authentic/AccessModal";
import { useAuth } from "../../context/auth-context";
import UserModal from "../user/UserModal";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const { userInfo } = useAuth();
  const openLogginModal = () => {
    setOpenLogin(true);
  };
  const closeLoginModal = () => {
    setOpenLogin(false);
  };
  return (
    <Fragment>
      <div className="border-b border-border-color fixed z-50  h-[60px] w-full bg-[#1A1A1B] flex items-center justify-around px-2 ">
        <NavLink to="/" className="">
          <div className="w-full max-w-[180px] gap-2 cursor-pointer ">
            <img
              className="object-cover w-full h-full "
              src="https://download.logo.wine/logo/Reddit/Reddit-Horizontal-White-Logo.wine.png"
              alt=""
            />
          </div>
        </NavLink>
        <div className="flex items-center justify-end w-full right">
          {/* input */}
          <div className="focus:border-clr-gb-1  bg-main-dark-lite flex max-w-[600px] w-full items-center gap-2 p-3 border border-clr-card-bg input rounded-3xl search-input">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
            <input
              placeholder="Search reddit"
              type="text"
              className="w-full text-base outline-none text-text-color "
            />
          </div>
          {/* icon */}
          <div className="flex items-center max-w-[250px] w-full justify-center gap-3 menu">
            <div
              title="What new?"
              className="w-full max-w-[40px]  h-[40px] p-1 flex items-center justify-center   rounded-sm  icon hover:bg-main-dark-lite"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  className="text-text-color"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <div
              title="Chat box"
              className="w-full max-w-[40px]  h-[40px] p-1 flex items-center justify-center   rounded-sm  icon hover:bg-main-dark-lite"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  className="text-text-color"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                />
              </svg>
            </div>
            <div
              title="Notification "
              className="w-full max-w-[40px]  h-[40px] p-1 flex items-center justify-center   rounded-sm  icon hover:bg-main-dark-lite"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  className="text-text-color"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                />
              </svg>
            </div>
            <NavLink
              title="Create a new post here"
              to="/post-addnew"
              className="w-full max-w-[40px]  h-[40px] p-1 flex items-center justify-center   rounded-sm  icon hover:bg-main-dark-lite"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  className="text-text-color"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </NavLink>
          </div>
          {/* user */}

          {/* login place */}
          {!userInfo ? (
            <div className="max-w-[200px] w-full flex items-center justify-around">
              <button
                onClick={openLogginModal}
                className="w-full p-3 text-sm max-w-[100px] font-semibold text-white rounded-3xl bg-reddit-color"
              >
                Login
              </button>
            </div>
          ) : (
            <UserModal></UserModal>
          )}

          {/* modal */}
          {openLogin && <AccessModal onClose={closeLoginModal}></AccessModal>}
          {/* <Login></Login> */}
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Header;
