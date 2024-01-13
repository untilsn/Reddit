import React from "react";

const ButtonForm = ({
  children,
  kind,
  type = "button",
  activeButton,
  isValid,
  className,
  content,
  ...props
}) => {
  return (
    <div>
      <button
        type={type}
        className={`${
          isValid && activeButton === "Post" && content.length > 20
            ? "text-white bg-reddit-color"
            : "text-clr-gb-4  bg-clr-card-bg disabled:pointer-events-none cursor-not-allowed"
        } py-3 px-6  font-semibold rounded-3xl mt-5 `}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonForm;
