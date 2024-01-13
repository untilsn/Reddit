import React from "react";

const Button = ({
  children,
  isValid,
  kind,
  content,
  type = "button",
  activeButton,
  onClick = () => {},
  className,
  image,
  ...props
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={`${
          kind === "secondary"
            ? "bg-gray-300 border text-black  border-black shadow-lg py-[6px] px-4 rounded-3xl "
            : isValid
            ? "bg-reddit-color "
            : "  bg-clr-card-bg hover:bg-clr-gb-6  "
        } w-full py-4 px-6 rounded-3xl font-semibold `}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
