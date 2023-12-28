import React from "react";
import InputForm from "../input/InputForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputPassword from "../input/InputPassword";
import Button from "../button/Button";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase/firebaseConfigure";
import slugify from "slugify";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { userStatus } from "../../utils/Contant";
import { toast } from "react-toastify";

const SignUp = ({ switchToSignIn, onClose }) => {
  const schema = yup.object({
    email: yup
      .string()
      .email("Your email is invalid")
      .required("Please enter your emailaddress"),
    fullname: yup.string().required("Please fill your username"),
    password: yup
      .string()
      .min(8, "Your password must be at least 8 character or greater"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignup = async (values) => {
    console.log(values);
    if (!isValid) return;
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
      photoURL:
        "https://play-lh.googleusercontent.com/kUOsgwyf8qbM0I7zKpnPr8b44WD0SzALloHWH7ROq3kUk2GM9ssj9a7fR-zulmG-sjU=w240-h480-rw",
    });
    // add collection
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
      username: slugify(values.fullname, { lower: true }),
      avatar:
        "https://play-lh.googleusercontent.com/kUOsgwyf8qbM0I7zKpnPr8b44WD0SzALloHWH7ROq3kUk2GM9ssj9a7fR-zulmG-sjU=w240-h480-rw",
      status: userStatus.ONLINE,
      createAt: serverTimestamp(),
    });
    toast.success("create user success");
  };

  return (
    <form
      onSubmit={handleSubmit(handleSignup)}
      className="transition-all ease-linear "
    >
      {/* modal */}
      {/* title */}
      <h1 className="text-xl font-semibold">SignUp</h1>
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
      <div className="flex flex-col mt-8 ">
        <label className="px-5 text-xs" htmlFor="email">
          Email
        </label>
        <InputForm
          control={control}
          name="email"
          placeholder="please enter your email address"
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
        <label className="px-5 text-xs" htmlFor="fullname">
          Fullname
        </label>
        <InputForm
          control={control}
          name="fullname"
          placeholder="enter you fullname"
        ></InputForm>
        {errors ? (
          <span className="px-5 mt-2 text-xs text-red-600">
            {errors?.fullname?.message}
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
      <div className="mt-10 text-[13px]">
        Forget your{" "}
        <a className="text-clr-blue" href="*">
          password
        </a>
        ?
      </div>
      <div className="mt-5 text-[13px]">
        Already a redditor?
        <span onClick={switchToSignIn} className="cursor-pointer text-clr-blue">
          Log In
        </span>
      </div>
      {/* button */}
      <Button type="submit" isValid={isValid}>
        Sign up
      </Button>
    </form>
  );
};

export default SignUp;
