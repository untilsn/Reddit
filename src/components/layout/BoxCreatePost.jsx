import React, { Fragment } from "react";

const BoxCreatePost = () => {
  return (
    <Fragment>
      <div className="flex rounded items-center mt-5 gap-5 p-3 border-border-color border bg-main-dark-gray w-full max-w-[700px]">
        <div className="relative w-full h-10 max-w-10">
          <img
            className="object-cover w-full h-full rounded-full"
            src="https://static.wikia.nocookie.net/legacy-of-the-dragonborne/images/8/82/Imga_Brute.jpg/revision/latest?cb=20160822194150"
            alt=""
          />
          {/* status */}
          <div className="absolute right-0 w-full h-5 bg-green-600 border-4 rounded-full -bottom-1 max-w-5 border-main-dark-lite"></div>
        </div>
        {/* input */}
        <div className="w-full">
          <input
            type="text"
            className="w-full p-3 border rounded bg-main-dark-lite border-border-color"
            placeholder="create post"
          />
        </div>
        {/* icon */}
        <div className="flex items-center w-full max-w-[70px] justify-end gap-5">
          <span className="">
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
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </span>
          <span className="">
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
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default BoxCreatePost;
