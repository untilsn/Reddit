import React, { Fragment, useEffect, useState } from "react";
import PostDetailUser from "../post/PostDetailUser";
import PostItem from "../post/PostItem";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfigure";
import { useAuth } from "../../context/auth-context";

const ProfileAuth = () => {
  const { userInfo } = useAuth();
  const [post, setPost] = useState("");
  console.log(userInfo.uid);
  useEffect(() => {
    if (!userInfo.uid) return;
    async function fetchDoc() {
      const colRef = collection(db, "posts");
      const q = query(colRef, where("user.id", "==", userInfo.uid));
      try {
        onSnapshot(q, (snapshot) => {
          const results = [];
          snapshot.forEach((doc) => {
            results.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          setPost((prevPost) => [...prevPost, ...results]);
        });
      } catch (error) {
        console.log(error);
      }
      console.log(post);
    }

    fetchDoc();
  }, [userInfo.uid]);
  return (
    <div>
      <div className="container mx-auto">
        <div className="h-[100px]"></div>
        <div className="flex justify-center gap-5">
          <div className="flex flex-col items-center gap-5">
            <PostItem postData={post}></PostItem>
          </div>
          <div>
            <PostDetailUser></PostDetailUser>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAuth;
