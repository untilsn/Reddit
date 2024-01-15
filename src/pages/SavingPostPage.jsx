import React, { Fragment, useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfigure";
import PostSavedList from "../components/saved/PostSavedList";

const SavingPostPage = () => {
  const { userInfo } = useAuth();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      if (!userInfo.saved) return;

      const colRef = collection(db, "posts");
      const q = query(colRef, where("id", "in", userInfo.saved));

      try {
        const querySnapshot = await getDocs(q);

        let result = [];
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

  console.log(postList);

  return (
    <Fragment>
      <PostSavedList post={postList}></PostSavedList>
    </Fragment>
  );
};

export default SavingPostPage;
