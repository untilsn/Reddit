import React from "react";

const Button = ({
  children,
  isValid,
  type = "button",
  onClick = () => {},
  ...props
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={`${
          isValid
            ? "text-white bg-reddit-color"
            : "text-clr-gb-4 bg-clr-card-bg  "
        } w-full p-4 mt-10  rounded-3xl  font-medium`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
