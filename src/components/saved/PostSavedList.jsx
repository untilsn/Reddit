import React, { Fragment } from "react";
import PostSavingItemForm from "./PostSavingItemForm";
import Like from "../reaction/Like";
import PostSavedItemImage from "./PostSavedItemImage";
import PostSavedItemLink from "./PostSavedItemLink";

const PostSavedList = ({ post }) => {
  return (
    <Fragment>
      <div className="w-full">
        <div className="flex flex-col gap-5 ">
          {post.length > 0 &&
            post.map((item, index) => (
              <div
                key={index}
                className="item w-full h-[100px] flex items-center rounded-sm overflow-hidden "
              >
                <div className="h-full max-w-[40px] w-full bg-main-dark-gray">
                  <Like item={item}></Like>
                </div>
                <div className="flex items-center w-full h-full px-5 bg-main-dark-lite">
                  {item?.titlePost ? (
                    <PostSavingItemForm data={item}></PostSavingItemForm>
                  ) : item?.titleImage ? (
                    <PostSavedItemImage data={item}></PostSavedItemImage>
                  ) : item?.titleLink ? (
                    <PostSavedItemLink data={item}></PostSavedItemLink>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default PostSavedList;
