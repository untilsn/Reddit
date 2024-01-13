import React, { Fragment } from "react";
import Slider from "../swiper/Slider";
import { NavLink } from "react-router-dom";

const PostImage = ({ data }) => {
  return (
    <Fragment>
      <NavLink to={`/post?id=${data?.id}`}>
        <Slider data={data}></Slider>
      </NavLink>
    </Fragment>
  );
};

export default PostImage;
