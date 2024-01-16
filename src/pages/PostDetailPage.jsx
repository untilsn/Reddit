import React, { Fragment, useEffect, useState } from "react";
import PostDetailUser from "../components/post/PostDetailUser";
import PostDetailComment from "../components/post/PostDetailComment";
import { useSearchParams } from "react-router-dom";
import parse from "html-react-parser";

import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfigure";
import Slider from "../components/swiper/Slider";
import Like from "../components/reaction/Like";

const PostDetailPage = () => {
  const [param] = useSearchParams();
  const postId = param.get("id");
  const [postData, setPostData] = useState();
  useEffect(() => {
    if (!postId) return;
    try {
      const colRef = doc(db, "posts", postId);
      onSnapshot(colRef, (doc) => {
        setPostData({
          id: doc.id,
          ...doc.data(),
        });
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(postData?.user?.id);

  return (
    <Fragment>
      <div className="">
        <div className="border-l-[80px] border-main-dark-gray border-r-[80px]">
          <div className="container">
            <div className="h-24"></div>
            <div className="flex gap-3">
              <div className=" bg-main-dark-gray w-full  max-w-[870px] flex rounded">
                {/* like quantity */}
                <Like item={postData}></Like>
                {/* post item */}
                <div className="w-full max-w-[828px] p-3 bg-main-dark-gray">
                  {/* info */}
                  <div className="flex items-center h-auto gap-2 px-3">
                    <div className="w-full h-[25px] max-w-[25px]">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        srcSet={postData?.user?.avatar}
                        alt=""
                      />
                    </div>
                    <span className="text-sm font-semibold normal-case">
                      r/{postData?.user?.fullname} <span></span>
                    </span>
                  </div>
                  {/* title */}
                  <h1 className="px-3 mt-3 text-lg ">
                    {postData?.titlePost ||
                      postData?.titleImage ||
                      postData?.titleLink}
                  </h1>
                  {/* post image */}
                  {postData?.titlePost ? (
                    <div className="flex items-center h-auto mt-5 overflow-hidden ">
                      <div className="h-auto entry-content">
                        {parse(postData?.content || "")}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {postData?.titleImage ? (
                    <div className="mt-5">
                      <Slider data={postData}></Slider>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* active */}
                  <div className="flex items-center gap-5 mt-10">
                    <div className="flex items-center gap-1 text-sm text-text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          className="text-text-primary"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                        />
                      </svg>
                      1 comments
                    </div>
                    <div className="flex items-center gap-1 text-sm text-text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-text-primary"
                      >
                        <path
                          className="text-text-primary"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
                        />
                      </svg>
                      share
                    </div>
                    <div className="flex items-center gap-1 text-sm text-text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-text-primary"
                      >
                        <path
                          className="text-text-primary"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                        />
                      </svg>
                      save
                    </div>
                    <div className="flex items-center gap-1 text-sm text-text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-text-primary"
                      >
                        <path
                          className="text-text-primary"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                      delete
                    </div>
                  </div>
                  {/* comment */}
                  <PostDetailComment></PostDetailComment>
                </div>
              </div>
              {/* user */}
              <PostDetailUser userId={postData?.user?.id}></PostDetailUser>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PostDetailPage;
