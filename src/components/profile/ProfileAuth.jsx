import React, { Fragment, useEffect, useState } from "react";
import PostItem from "../post/PostItem";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfigure";
import { useAuth } from "../../context/auth-context";
import { NavLink } from "react-router-dom";
import { useFirebaseImage } from "../../context/useFirebaseImage";
import PostDetailAuth from "../post/PostDetailAuth";

const ProfileAuth = () => {
  const { userInfo } = useAuth();
  const [post, setPost] = useState("");

  useEffect(() => {
    if (!userInfo.uid) return;
    const q = query(
      collection(db, "posts"),
      where("user.id", "==", userInfo.uid)
    );
    try {
      onSnapshot(q, (snapshot) => {
        const results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPost(results);
      });
    } catch (error) {
      console.log(error);
    }
  }, [userInfo.uid]);

  return (
    <div>
      <div className="container mx-auto">
        <div className="h-[100px]"></div>
        <div className="flex justify-center gap-5">
          {post.length > 0 ? (
            <div className="flex flex-col items-center gap-5">
              <PostItem postData={post}></PostItem>
            </div>
          ) : (
            <div className="max-w-[658px] flex flex-col items-center gap-5 mt-20 w-full">
              <h1 className=" text-text-primary">
                There doesn't seem to be anything here{" "}
              </h1>
              <NavLink to="/post-addnew">
                <div className="font-semibold uppercase text-reddit-color">
                  Create post
                </div>
              </NavLink>
            </div>
          )}
          <div>
            <PostDetailAuth userData={userInfo}></PostDetailAuth>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAuth;
