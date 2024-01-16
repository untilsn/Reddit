import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfigure";
import PostItem from "../post/PostItem";
import PostDetailUser from "../post/PostDetailUser";

const ProfileUser = () => {
  const [param] = useSearchParams();
  const [post, setPost] = useState([]);
  const userId = param.get("id");

  useEffect(() => {
    if (!userId) return;
    console.log(userId);
    const docRef = query(
      collection(db, "posts"),
      orderBy("createAt", "desc"),
      where("user.id", "==", userId)
    );
    onSnapshot(docRef, (snapshot) => {
      let result = [];
      snapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPost(result);
    });
  }, [userId]);

  console.log(post);
  return (
    <Fragment>
      <div className="container">
        <div className="h-[100px]"></div>
        <div className="flex justify-center gap-5 mx-auto">
          <div className="flex flex-col gap-5">
            <PostItem postData={post}></PostItem>
          </div>
          <div>
            <PostDetailUser userId={userId}></PostDetailUser>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileUser;
