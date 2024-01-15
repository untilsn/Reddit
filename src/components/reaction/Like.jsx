import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import React, { Fragment } from "react";
import { db } from "../../firebase/firebaseConfigure";
import { useAuth } from "../../context/auth-context";
import AccessModal from "../authentic/AccessModal";
import Login from "../authentic/Login";
import { toast } from "react-toastify";

const Like = ({ item }) => {
  const { userInfo } = useAuth();
  const handleLike = async (item) => {
    if (!userInfo) return toast.error("you must be login to like post");
    if (!item.id) {
      console.error("Invalid itemId");
      return;
    }
    const postRef = doc(db, "posts", item.id);

    if (item?.like && item?.like.includes(userInfo?.uid)) {
      // Thực hiện unlike
      await updateDoc(postRef, {
        like: arrayRemove(userInfo?.uid),
      });
      console.log("unLike successful");
    } else {
      // Thực hiện like
      await updateDoc(postRef, {
        like: arrayUnion(userInfo?.uid),
        dislike: arrayRemove(userInfo?.uid),
      });
      console.log("Like successful");
    }
  };

  const handleDislike = async (item) => {
    if (!userInfo) return toast.error("you must be login to dislike post");

    if (!item.id) {
      console.error("Invalid itemId");
      return;
    }

    const postRef = doc(db, "posts", item.id);

    if (item?.dislike && item?.dislike.includes(userInfo?.uid)) {
      // Thực hiện undisdislike
      await updateDoc(postRef, {
        dislike: arrayRemove(userInfo?.uid),
      });
      console.log("undislike successful");
    } else {
      // Thực hiện dislike
      await updateDoc(postRef, {
        dislike: arrayUnion(userInfo?.uid),
        like: arrayRemove(userInfo?.uid),
      });
      console.log("dislike successful");
    }
  };

  return (
    <Fragment>
      <div className="h-full py-3 overflow-hidden  bg-clr-box- w-[40px] flex flex-col items-center ">
        {/* up */}
        <div
          className="p-1 rounded cursor-pointer hover:bg-main-dark-gray"
          onClick={() => handleLike(item)}
        >
          {item?.like && item?.like.includes(userInfo?.uid) ? (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 -rotate-90"
              >
                <path
                  className="text-reddit-color"
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          ) : (
            <span className=" group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 -rotate-90"
              >
                <path
                  className="group-hover:text-reddit-color"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
            </span>
          )}
        </div>
        {/* quantity */}
        <span className="text-xs font-semibold">
          {!item?.dislike
            ? item?.like?.length
            : item?.like?.length - item?.dislike?.length}
        </span>
        {/* down */}
        <div
          className="p-1 rounded cursor-pointer hover:bg-main-dark-gray"
          onClick={() => handleDislike(item)}
        >
          {item?.dislike && item?.dislike.includes(userInfo?.uid) ? (
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 rotate-90"
              >
                <path
                  className="text-clr-blue"
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          ) : (
            <span className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 rotate-90"
              >
                <path
                  className="group-hover:text-clr-blue"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
            </span>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Like;
