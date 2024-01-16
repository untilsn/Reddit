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
import { NavLink } from "react-router-dom";
import { array } from "yup";

const PostItem = ({ postData }) => {
  const [posts, setPosts] = useState([]);
  // Kiểm tra và chuyển đổi postData thành mảng nếu không phải là mảng
  useEffect(() => {
    if (!Array.isArray(postData)) {
      setPosts([postData]);
    } else {
      setPosts(postData);
    }
  }, [postData]);

  const { userInfo } = useAuth();
  const dayData = postData?.createAt
    ? new Date(postData?.createAt * 1000)
    : new Date();
  const formatDate = new Date(dayData).toLocaleDateString("vi-VN");
  if (!postData) return;
  // ? IS LIKE

  const handleFollowing = async (item, index) => {
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

  const handleSavingPost = async (item, index) => {
    const docRef = doc(db, "users", userInfo?.uid);
    try {
      await updateDoc(docRef, {
        saved: arrayUnion(item?.uid),
      });
      console.log("save success");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnsavingPost = async (item, index) => {
    const docRef = doc(db, "users", userInfo?.uid);
    try {
      await updateDoc(docRef, {
        saved: arrayRemove(item?.uid),
      });
      console.log("unsave success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      {posts.length > 0 &&
        posts.map((item, index) => (
          <div
            key={item.id}
            className="h-auto  transition-all hover:border hover:border-border-color border border-transparent   bg-main-dark-lite w-full max-w-[700px] flex "
          >
            {/* like quantity */}
            <Like item={item}></Like>
            {/* post item */}
            <div className="flex flex-col w-full h-full max-w-[658px] px-3 pt-3  bg-main-dark-gray">
              {/* info */}
              <div className="flex items-center h-[30px] justify-between">
                <div className="flex items-center h-auto gap-2">
                  <div className=" h-[25px] w-[25px] rounded-s-none">
                    <img
                      className="object-cover w-full h-full border rounded-full border-text-primary"
                      srcSet={item?.user?.avatar}
                      alt=""
                    />
                  </div>
                  <NavLink to={`/profile-user?id=${item?.user?.id}`}>
                    <span className="flex items-center gap-3 max-w-[500px] w-full text-xs font-semibold normal-case ">
                      <span
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        className="mt-[1px] transition-all w-full max-w-[300px]  font-semibold normal-case border-b border-main-dark-gray hover:border-b hover:border-text-primary"
                      >
                        r/{item?.user?.fullname}
                      </span>
                      .<span className="text-text-primary">{formatDate}</span>
                    </span>
                  </NavLink>
                </div>
                {/* the follow */}
                {userInfo?.followings &&
                userInfo?.followings.includes(item?.user?.id) ? (
                  <button
                    className="px-4 py-2 text-sm font-semibold text-black cursor-pointer bg-text-color rounded-3xl"
                    onClick={() => handleUnFollowing(item)}
                  >
                    Following
                  </button>
                ) : item?.user?.id === userInfo?.uid ? (
                  ""
                ) : (
                  <button
                    className="px-4 py-2 text-sm font-semibold text-black cursor-pointer bg-text-color rounded-3xl"
                    onClick={() => handleFollowing(item)}
                  >
                    Follow
                  </button>
                )}
                {/* ffff */}
              </div>

              {/* title */}
              <h1 className=" text-lg font-[500] mt-1 ">
                {item?.titlePost || item?.titleImage || item?.titleLink}
              </h1>
              {/* post type */}
              <div className="w-full h-auto mt-2">
                {item?.titlePost ? (
                  <PostForm data={item}></PostForm>
                ) : item?.titleImage ? (
                  <PostImage kind="secondary" data={item}></PostImage>
                ) : item?.titleLink ? (
                  <PostLink data={item}></PostLink>
                ) : (
                  ""
                )}
              </div>
              {/* active */}
              <div className="flex items-center gap-2 mt-2 ">
                <div className="flex items-center gap-1 p-2 text-xs font-bold rounded-sm hover:bg-main-dark-lite">
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
                <div className="flex items-center gap-1 p-2 text-xs font-bold rounded-sm hover:bg-main-dark-lite">
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

                {userInfo?.saved.includes(item?.uid) ? (
                  <div
                    onClick={() => handleUnsavingPost(item, index)}
                    className="flex items-center gap-1 p-2 text-xs font-bold rounded-sm hover:bg-main-dark-lite"
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
                    onClick={() => handleSavingPost(item, index)}
                    className="flex items-center gap-1 p-2 text-xs font-bold rounded-sm hover:bg-main-dark-lite"
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
        ))}
    </Fragment>
  );
};

export default PostItem;
