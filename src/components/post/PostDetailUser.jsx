import React, { Fragment } from "react";
import { useAuth } from "../../context/auth-context";
import Button from "../button/Button";

const PostDetailUser = () => {
  const { userInfo } = useAuth();
  return (
    <Fragment>
      <div className="border border-border-color  overflow-hidden rounded-md w-full max-w-[340px] h-[500px] bg-main-dark-gray">
        {/* backgroud */}
        <div className="w-full h-[120px] relative ">
          <img
            className="object-cover w-full h-full"
            src="https://cdn.shopify.com/s/files/1/0528/3971/0891/files/IP_1_Heart_Hunter_-_Artist_Schlee_-_covercrop.png?v=1666197949"
            alt=""
          />
          {/* avatar */}
          <div className="max-w-[110px] h-[110px] absolute  -bottom-10 -translate-x-[50%]  left-[50%]">
            <img
              className="object-cover w-full h-full rounded-full "
              src="https://www.latestanimenews.com/wp-content/uploads/2022/12/banner-blog-s.png"
              alt=""
            />
          </div>
        </div>
        {/* info */}
        <div className="p-3 mt-12">
          <h1 className="text-lg font-semibold text-center">
            {userInfo?.username}
          </h1>
          <p className="mt-5 ">desciptionS꙰J꙰R꙰R꙰T꙰F꙰C꙰4E꙰F꙰F꙰</p>
          <div className="grid grid-cols-2 gap-2 mt-5">
            <div className="text-sm font-semibold">
              <span>Karma</span>
              <div className="flex items-center gap-2 font-medium text-text-primary">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      className="text-blue-500"
                      fillRule="evenodd"
                      d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                0
              </div>
            </div>
            <div className="text-sm font-semibold">
              <span>Cake day</span>
              <div className="flex items-center gap-2 font-medium text-text-primary">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      className="text-blue-500"
                      d="m15 1.784-.796.795a1.125 1.125 0 1 0 1.591 0L15 1.784ZM12 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L12 1.784ZM9 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L9 1.784ZM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 0 1 1.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 0 1 1.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 0 0-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 0 1 1.5 0v.797ZM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 0 1 2.585.364 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 2.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0 0 12 12.75ZM21.75 18.131a2.604 2.604 0 0 0-1.915.165 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.604 2.604 0 0 0-1.915-.165v2.494c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494Z"
                    />
                  </svg>
                </span>
                June 16, 2020
              </div>
            </div>
            <div className="text-sm font-semibold">
              <span>Followers</span>
              <div className="flex items-center gap-2 font-medium text-text-primary">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      className="text-blue-500"
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                2
              </div>
            </div>
          </div>
          {/* add about */}
          <div className="max-w-[180px] mt-6">
            <Button kind="secondary">+ Add About</Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PostDetailUser;
