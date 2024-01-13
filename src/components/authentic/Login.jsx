import React from "react";
import InputForm from "../input/InputForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputPassword from "../input/InputPassword";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfigure";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth-context";
import Button from "../button/Button";

const Login = ({ switchToSignUp, onClose }) => {
  const { useInfo } = useAuth();
  const schema = yup.object({
    email: yup
      .string()
      .email("Your email is invalid")
      .required("Please enter your emailaddress"),
    password: yup
      .string()
      .min(8, "Your password must be at least 8 character or greater"),
  });

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (values) => {
    if (!isValid) return;
    console.log(values);
    signInWithEmailAndPassword(auth, values.email, values.password);
    toast.success(`welcome back`);
    onClose();
  };
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      {/* title */}
      <h1 className="text-xl font-semibold">Log In</h1>
      <div className="flex w-full p-3 mt-5 bg-white rounded-3xl">
        <div className="max-w-[20px] h-[20px]  ">
          <img
            className="object-cover w-full h-full"
            srcSet="./google-logo.png 2x"
            alt=""
          />
        </div>
        <span className="flex-1 text-sm text-center text-black">
          Continue with Google
        </span>
      </div>
      {/* or */}
      <div className="w-full h-[0.5px] bg-clr-gb-3 mt-10 relative">
        <span className="absolute uppercase text-xs font-thin left-[50%] text-clr-gb-2 -translate-x-[50%] top-[50%] -translate-y-[50%] z-10 bg-clr-page-bg px-5 ">
          or
        </span>
      </div>
      {/* input */}
      <div className="flex flex-col mt-10 ">
        <label className="px-5 text-xs" htmlFor="email">
          Email
        </label>
        <InputForm
          control={control}
          name="email"
          placeholder="enter you username"
        ></InputForm>
        {errors ? (
          <span className="px-5 mt-2 text-xs text-red-600">
            {errors?.email?.message}
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col mt-5 ">
        <label className="px-5 text-xs " htmlFor="password">
          Password
        </label>
        <InputPassword control={control}></InputPassword>
        {errors ? (
          <span className="px-5 mt-2 text-xs text-red-600">
            {errors?.password?.message}
          </span>
        ) : (
          ""
        )}
      </div>
      {/* term */}
      <div className="mt-5 text-[13px]">
        Forget your{" "}
        <a className="text-clr-blue" href="*">
          password
        </a>
        ?
      </div>
      <div className="mt-5 text-[13px] mb-10">
        New to Reddit{" "}
        <span onClick={switchToSignUp} className="cursor-pointer text-clr-blue">
          Signup
        </span>
      </div>
      {/* button */}
      <Button
        type="submit"
        isValid={isValid}
        className="w-full p-4 mt-14 text-clr-gb-4 rounded-3xl bg-clr-card-bg"
      >
        Login
      </Button>
    </form>
  );
};

export default Login;
