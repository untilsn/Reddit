import React from "react";

const ButtonLink = ({
  children,
  isValid,
  kind,
  content,
  type = "button",
  activeButton,
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
          isValid && activeButton === "Link"
            ? "text-white bg-reddit-color"
            : "text-clr-gb-4 bg-clr-card-bg disabled:pointer-events-none"
        } py-3 px-6 font-semibold  rounded-3xl mt-5 `}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonLink;
