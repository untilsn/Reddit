import React, { Fragment, useEffect, useState } from "react";
import InputForm from "../input/InputForm";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfigure";
import ButtonLink from "../button/ButtonLink";
import { useAuth } from "../../context/auth-context";
import { toast } from "react-toastify";
import useHandleKarmaIncrement from "../../hook/usehandleKarmaIncrement";

const AddPostLink = ({ activeButton }) => {
  const { userInfo } = useAuth();
  const { handleKarmaIncrement } = useHandleKarmaIncrement();

  const schema = yup.object({
    titleLink: yup
      .string()
      .max(300, "Can't be more than 300 characters")
      .required("Please fill in your title"),
    link: yup
      .string()
      .url("that URL is not right")
      .required("Please enter your URL"),
  });

  const {
    handleSubmit,
    reset,
    setValue,
    formState: { isValid, errors },
    control,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      titleLink: "", // Thêm giá trị mặc định cho trường title
      link: "",
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    async function dataUser() {
      if (!userInfo.email) return;
      const colRef = collection(db, "users");
      const q = query(colRef, where("email", "==", userInfo.email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) =>
        setValue("user", {
          id: doc.id,
          ...doc.data(),
        })
      );
    }
    dataUser();
  }, [userInfo.email]);

  useEffect(() => {
    const arrErrors = Object.values(errors);
    // Biến errors thành một array
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);

  const handlePostLink = async (values) => {
    if (!isValid || !userInfo.uid) return;
    const colRef = collection(db, "posts");
    const cloneValues = { ...values };
    try {
      await addDoc(colRef, {
        ...cloneValues,
        liked: true,
        disliked: false,
        like: [userInfo?.uid],
        createAt: serverTimestamp(),
      });
      handleKarmaIncrement();
      toast.success("Add post success");
      reset({
        titleLink: "",
        link: "",
        liked: true,
        disliked: false,

        createAt: serverTimestamp(),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(handlePostLink)}>
        <div className="py-3 min-h-[50px]">
          <InputForm
            name="titleLink"
            type="text"
            control={control}
            kind="secondary"
            placeholder="Title"
            className="mt-5"
          ></InputForm>
        </div>
        <div>
          <InputForm
            name="link"
            type="url"
            control={control}
            kind="secondary"
            placeholder="Url"
            className="mt-5"
          ></InputForm>
        </div>
        <div className="flex justify-end gap-5 px-5">
          <ButtonLink
            activeButton={activeButton}
            isValid={isValid}
            type="submit"
            className="bg-bg-btn-color flex-1 w-full max-w-[100px] mr-10"
          >
            Post
          </ButtonLink>
        </div>
      </form>
    </Fragment>
  );
};

export default AddPostLink;
