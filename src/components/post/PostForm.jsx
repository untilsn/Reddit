import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
const PostForm = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div
        onClick={() => navigate(`/post?id=${data.id}`)}
        className="flex items-center h-auto mt-auto overflow-hidden cursor-pointer "
      >
        <div className="h-[500px]">
          <div className=" entry-content">{parse(data?.content || "")}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default PostForm;
