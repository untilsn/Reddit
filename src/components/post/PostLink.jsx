import React, { Fragment } from "react";

const PostLink = ({ data }) => {
  return (
    <Fragment>
      <a
        className="text-sm text-blue-500 hover:border-blue-500 hover:border-b"
        href={`http://${data?.link}`}
      >
        {data?.link}
      </a>
    </Fragment>
  );
};

export default PostLink;
