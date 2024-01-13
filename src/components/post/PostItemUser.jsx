import React, { useState } from "react";
import { Icons } from "react-toastify";

const PostItemUser = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    setIsLiked((prev) => !prev); // Toggle "like" state
    setIsDisliked(false); // Turn off "dislike"
  };

  const handleDislike = () => {
    setIsDisliked((prev) => !prev); // Toggle "dislike" state
    setIsLiked(false); // Turn off "like"
  };
  return (
    <div className=" bg-main-dark-lite w-full max-w-[700px] flex rounded">
      {/* like quantity */}
      <div className="h-auto py-3 bg-main-dark-gray w-full max-w-[40px] flex flex-col items-center gap-2">
        {/* up */}
        <div
          className="p-1 rounded hover:bg-main-dark-lite"
          onClick={handleLike}
          disabled={isLiked}
        >
          {isLiked ? (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 -rotate-90"
              >
                <path
                  className="text-reddit-color"
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          ) : (
            <span className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 -rotate-90"
              >
                <path
                  className="group-hover:text-reddit-color"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
            </span>
          )}
        </div>
        {/* quantity */}
        <span className="text-xs">2.2k</span>
        {/* down */}
        <div
          className="p-1 rounded hover:bg-main-dark-lite"
          onClick={handleDislike}
          disabled={isDisliked}
        >
          {isDisliked ? (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 rotate-90"
              >
                <path
                  className="text-clr-blue"
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          ) : (
            <span className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 rotate-90"
              >
                <path
                  className="group-hover:text-clr-blue"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
            </span>
          )}
        </div>
      </div>
      {/* post item */}
      <div className="w-full p-3">
        {/* info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 ">
            <div className="h-5 max-w-5">
              <img
                className="object-cover w-full h-full rounded-full"
                srcSet="https://fructital.it/wp-content/uploads/2019/01/noce1.jpg 2x"
                alt=""
              />
            </div>
            <span className="text-xs normal-case ">
              r/niga . <span>3day ago</span>
            </span>
          </div>
          <div className="px-4 py-2 text-sm text-black bg-white rounded-3xl">
            Follower
          </div>
        </div>

        {/* title */}
        <h1 className="mt-5 ">
          I guess I left my computer on for a few days last month. Good thing
          the dorm doesn't mind high data usage
        </h1>
        {/* post image */}
        <div className="flex items-center h-[512px] mt-5 overflow-hidden ">
          <img
            src="https://i.redd.it/aqdwj3e2eaac1.jpeg"
            className="object-cover w-full h-full "
            alt=""
          />
        </div>
        {/* active */}
        <div className="flex items-center gap-5 mt-2">
          <div className="flex items-center gap-1 text-xs">
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
                d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
            1 comments
          </div>
          <div className="flex items-center gap-1 text-xs">
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
                d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
              />
            </svg>
            share
          </div>
          <div className="flex items-center gap-1 text-xs">
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
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
            save
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItemUser;
