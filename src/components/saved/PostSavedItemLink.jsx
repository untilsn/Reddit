import React, { Fragment } from "react";
import { useAuth } from "../../context/auth-context";

const PostSavedItemLink = ({ data }) => {
  const { userInfo } = useAuth();

  const dayData = data?.createAt ? new Date(data?.createAt * 1000) : new Date();
  const formatDate = new Date(dayData).toLocaleDateString("vi-VN");

  const handleSavingPost = async (data) => {
    const docRef = doc(db, "users", userInfo?.uid);
    try {
      await updateDoc(docRef, {
        saved: arrayUnion(data?.uid),
      });
      console.log("save success");
    } catch (error) {
      console.log(error);
    }
  };
  const handleUnsavingPost = async (data) => {
    const docRef = doc(db, "users", userInfo?.uid);
    try {
      await updateDoc(docRef, {
        saved: arrayRemove(data?.uid),
      });
      console.log("unsave success");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      <div className="flex items-center w-full gap-5">
        {/* image */}
        <div className="max-w-[120px] h-[80px] w-full">
          <img
            className="object-cover w-full h-full rounded-lg"
            src="https://images.vexels.com/media/users/3/141097/isolated/lists/b9ae06c09f2ef921415cef871e7aa9c2-reddit-distorted-round-icon.png"
            alt=""
          />
        </div>
        {/* content */}
        <div>
          <div className="flex flex-col items-start justify-center h-auto">
            <div>
              <div className="flex items-center gap-4 ">
                <h1 className="text-lg font-semibold text-white">
                  {data?.titleLink}
                </h1>
                <span className="text-sm font-semibold">
                  r/{data?.user?.fullname}
                </span>
                <span className="text-sm font-semibold text-text-primary">
                  {formatDate}
                </span>
              </div>
            </div>
            <h1 className="text-sm font-semibold text-blue-400">
              {data?.link}
            </h1>

            <div className="flex items-center gap-5 mt-3">
              <div className="flex items-center gap-1 text-xs font-bold rounded-sm hover:bg-main-dark-lite">
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
              <div className="flex items-center gap-1 text-xs font-bold rounded-sm hover:bg-main-dark-lite">
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

              {userInfo?.saved.includes(data?.uid) ? (
                <div
                  onClick={() => handleUnsavingPost(data)}
                  className="flex items-center gap-1 text-xs font-bold rounded-sm hover:bg-main-dark-lite"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  unsave
                </div>
              ) : (
                <div
                  onClick={() => handleSavingPost(data)}
                  className="flex items-center gap-1 text-xs font-bold rounded-sm hover:bg-main-dark-lite"
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
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                    />
                  </svg>
                  save
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PostSavedItemLink;
