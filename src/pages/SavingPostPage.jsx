import React, { Fragment, useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfigure";
import PostSavedList from "../components/saved/PostSavedList";
import PostDetailAuth from "../components/post/PostDetailAuth";
import { NavLink } from "react-router-dom";

const SavingPostPage = () => {
  const { userInfo } = useAuth();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      if (!userInfo.saved) return;
      const q = query(
        collection(db, "posts"),
        where("uid", "in", userInfo?.saved)
      );
      try {
        const querySnapshot = await getDocs(q);
        const result = [];
        querySnapshot.forEach((doc) => {
          result.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPostList(result);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchPost();
  }, [userInfo.saved]);

  return (
    <Fragment>
      <div className="px-20">
        <div className="h-[100px]"></div>
        <div className="flex justify-center w-full gap-5">
          {postList.length > 0 ? (
            <div className="w-full">
              <PostSavedList post={postList}></PostSavedList>
            </div>
          ) : (
            <div className="max-w-[658px] flex flex-col items-center gap-5 mt-20 w-full">
              <h1 className=" text-text-primary">
                There doesn't seem to be anything here{" "}
              </h1>
              <NavLink to="/post-addnew">
                <div className="font-semibold uppercase text-reddit-color">
                  Home Page
                </div>
              </NavLink>
            </div>
          )}

          <PostDetailAuth userData={userInfo}></PostDetailAuth>
        </div>
      </div>
    </Fragment>
  );
};

export default SavingPostPage;
