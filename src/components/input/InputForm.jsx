import React, { Fragment } from "react";
import { useController } from "react-hook-form";

const InputForm = ({
  name = "",
  type = "text",
  children,
  control,
  ...props
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        className={`${
          children ? "pr-[50px]" : "pr-[30px]"
        } w-full p-4 mt-2 normal-case text-sm text-current transition-all border border-transparent rounded-3xl focus:text-white focus:border-blue-500 focus:bg-transparent bg-clr-card-bg`}
        type={type}
        id={name}
        {...field}
        {...props}
      />
      {children ? (
        <div className="absolute right-[20px] cursor-pointer text-red-900 top-[50%] -translate-y-[10%] z-20">
          {children}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputForm;
