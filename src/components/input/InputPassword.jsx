import React, { useState } from "react";
import InputForm from "./InputForm";
import IconEyesClose from "../icons/IconEyesClose";
import IconEyesOpen from "../icons/IconEyesOpen";

const InputPassword = ({ control }) => {
  if (!control) return null;
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <div>
      <InputForm
        type={togglePassword ? "text" : "password"}
        name="password"
        placeholder="Please enter your password"
        control={control}
      >
        {!togglePassword ? (
          <IconEyesClose
            onClick={() => setTogglePassword(true)}
          ></IconEyesClose>
        ) : (
          <IconEyesOpen onClick={() => setTogglePassword(false)}></IconEyesOpen>
        )}
      </InputForm>
    </div>
  );
};

export default InputPassword;
