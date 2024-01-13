import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
const PostForm = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div
        onClick={() => navigate(`/post?id=${data.id}`)}
        className="flex cursor-pointer items-center h-[512px] mt-auto overflow-hidden "
      >
        <div className="entry-content">{parse(data?.content || "")}</div>
      </div>
    </Fragment>
  );
};

export default PostForm;
