import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
const PostForm = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div
        onClick={() => navigate(`/post?id=${data.id}`)}
        className="flex items-center h-[550px] mt-auto overflow-hidden cursor-pointer "
      >
        <div className="entry-content">{parse(data?.content || "")}</div>
      </div>
    </Fragment>
  );
};

export default PostForm;
