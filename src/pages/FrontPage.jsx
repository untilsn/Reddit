import React, { useEffect, useState } from "react";
import PostItem from "../components/post/PostItem";
import BoxSorting from "../components/layout/BoxSorting";
import BoxRight from "../components/layout/BoxRight";
import BoxCreatePost from "../components/layout/BoxCreatePost";
import PostItemUser from "../components/post/PostItemUser";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfigure";

const FrontPage = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    try {
      async function fecthPost() {
        const q = query(
          collection(db, "posts"),
          orderBy("createAt", "desc"),
          limit(10)
        );

        onSnapshot(q, (snapshot) => {
          let result = [];
          snapshot.forEach((doc) => {
            result.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          setPost(result);
        });
      }
      fecthPost();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="container flex justify-center gap-5">
      <div className="flex flex-col items-center w-full max-w-[700px] gap-5  mt-16 ">
        <BoxCreatePost></BoxCreatePost>
        <BoxSorting></BoxSorting>
        <PostItem postData={post}></PostItem>
        <PostItemUser></PostItemUser>
      </div>
      <div>
        <BoxRight></BoxRight>
      </div>
    </div>
  );
};

export default FrontPage;
