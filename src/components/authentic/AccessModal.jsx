import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const AccessModal = ({ onClose }) => {
  const [currentComponent, setCurrentComponent] = useState("signin");

  const switchToSignUp = () => {
    setCurrentComponent("signup");
  };

  const switchToSignIn = () => {
    setCurrentComponent("signin");
  };
  return (
    <div>
      <div className="transition-all ease-linear ">
        {/* overlay */}
        <div
          onClick={onClose}
          className="fixed inset-0 z-10 bg-black overlay bg-opacity-30"
        ></div>
        <div
          className={`${
            currentComponent === "signup" ? "h-[700px]" : "h-[600px]"
          } modal p-10  w-[500px]  rounded-2xl bg-clr-page-bg z-20 absolute top-[50%]  left-[50%] -translate-x-[50%]`}
        >
          {/* button */}
          <div
            onClick={onClose}
            className="absolute flex items-center justify-center bg-gray-700 rounded-full hover:bg-slate-600 w-7 h-7 top-5 right-10"
          >
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          {/* modal */}
          {currentComponent === "signin" ? (
            <Login onClose={onClose} switchToSignUp={switchToSignUp}></Login>
          ) : (
            <SignUp onClose={onClose} switchToSignIn={switchToSignIn}></SignUp>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccessModal;
