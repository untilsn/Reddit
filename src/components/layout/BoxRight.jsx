import React from "react";
import Button from "../button/Button";

const BoxRight = () => {
  return (
    <div className="border border-border-color mt-20 sticky top-[70px] w-full max-w-[350px] h-[300px] overflow-hidden rounded-lg bg-main-dark-gray">
      {/* background */}
      <div className="relative">
        <img
          srcSet="https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png"
          className="object-cover w-full  h-[40px] "
          alt=""
        />
        {/* icon reddit */}
        <div className="absolute left-0 flex items-center gap-5 px-5 mt-5 -bottom-12">
          <img
            srcSet="https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png 2x"
            className=" max-w-[40px] h-[70px] object-cover w-full  "
            alt=""
          />
          <span className="mt-5 text-lg font-medium">home</span>
        </div>
      </div>
      {/* line */}
      <div className="px-5">
        <div className="h-[65px] w-full"></div>
        <h1 className="leading-5 tracking-wide normal-case">
          Your personal Reddit frontpage. Come here to check in with your
          favorite communities.
        </h1>
        <div className="w-full h-[2px] bg-main-dark-lite mt-10 mb-5 "></div>
        <Button>Create community</Button>
      </div>
    </div>
  );
};

export default BoxRight;
