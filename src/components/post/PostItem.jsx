import React, { Fragment, useEffect, useState } from "react";
import PostImage from "./PostImage";
import PostLink from "./PostLink";
import PostForm from "./PostForm";
import Like from "../reaction/Like";
import { useAuth } from "../../context/auth-context";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfigure";

const PostItem = ({ postData }) => {
  const { userInfo } = useAuth();
  const dayData = postData?.createAt
    ? new Date(postData?.createAt * 1000)
    : new Date();
  const formatDate = new Date(dayData).toLocaleDateString("vi-VN");
  if (!postData) return;
  // ? IS LIKE

  const handleFollowing = async (item, index) => {
    console.log(item?.user?.id);
    try {
      const userRef = doc(db, "users", userInfo?.uid);
      await updateDoc(userRef, { followings: arrayUnion(item?.user?.id) });
      const docRef = doc(db, "users", item?.user?.id);
      await updateDoc(docRef, { followers: arrayUnion(userInfo?.uid) });
      console.log("follow");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnFollowing = async (item, index) => {
    console.log(item?.user?.id);
    try {
      const userRef = doc(db, "users", userInfo?.uid);
      await updateDoc(userRef, { followings: arrayRemove(item?.user?.id) });
      const docRef = doc(db, "users", item?.user?.id);
      await updateDoc(docRef, { followers: arrayRemove(userInfo?.uid) });
      console.log("unfollow");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      {postData.map((item, index) => (
        <div
          key={item.id}
          className="h-auto  transition-all hover:border hover:border-border-color border border-transparent   bg-main-dark-lite w-full max-w-[700px] flex "
        >
          {/* like quantity */}
          <Like item={item}></Like>
          {/* post item */}
          <div className="flex flex-col w-full h-full max-w-[658px]  p-3  bg-main-dark-gray">
            {/* info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-5 max-w-5 rounded-s-none ">
                  <img
                    className="object-cover w-full h-full rounded-full"
                    srcSet={item?.user?.avatar}
                    alt=""
                  />
                  <div></div>
                </div>
                <span className="text-xs font-semibold normal-case ">
                  r/{item?.user?.fullname} .{" "}
                  <span className="text-text-primary">{formatDate}</span>
                </span>
              </div>
              {/* the follow */}
              {userInfo?.followings &&
              userInfo?.followings.includes(item?.user?.id) ? (
                <div
                  className="px-4 py-2 text-sm font-semibold text-black bg-text-color rounded-3xl"
                  onClick={() => handleUnFollowing(item)}
                >
                  Following
                </div>
              ) : item?.user?.id === userInfo?.uid ? (
                ""
              ) : (
                <div
                  className="px-4 py-2 text-sm font-semibold text-black bg-text-color rounded-3xl"
                  onClick={() => handleFollowing(item)}
                >
                  Follow
                </div>
              )}
              {/* ffff */}
            </div>

            {/* title */}
            <h1 className=" text-lg font-[500] ">
              {item?.titlePost || item?.titleImage || item?.titleLink}
            </h1>
            {/* post type */}
            <div className="w-full h-auto mt-4">
              {item?.titlePost ? (
                <PostForm data={item}></PostForm>
              ) : item?.titleImage ? (
                <PostImage data={item}></PostImage>
              ) : item?.titleLink ? (
                <PostLink data={item}></PostLink>
              ) : (
                ""
              )}
            </div>
            {/* active */}
            <div className="flex items-center gap-5 mt-3">
              <div className="flex items-center gap-1 text-xs font-bold">
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
              <div className="flex items-center gap-1 text-xs font-bold">
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
              <div className="flex items-center gap-1 text-xs font-bold">
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
      ))}
    </Fragment>
  );
};

export default PostItem;
