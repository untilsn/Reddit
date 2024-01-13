import React from "react";

const ButtonImage = ({
  children,
  isValid,
  kind,
  type = "button",
  activeButton,
  image,
  onClick = () => {},
  className,
  ...props
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={` ${
          isValid && activeButton === "Image & Video" && image.length > 0
            ? "text-white bg-reddit-color"
            : "text-clr-gb-4 bg-clr-card-bg disabled:pointer-events-none"
        } py-3 px-6 font-semibold  rounded-3xl mt-5 `}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonImage;
