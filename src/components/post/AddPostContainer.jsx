import React, { Fragment, useEffect, useState } from "react";
import InputForm from "../input/InputForm";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ButtonForm from "../button/ButtonForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";

import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  runTransaction,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfigure";
import { useAuth } from "../../context/auth-context";
import { toast } from "react-toastify";
import useHandleKarmaIncrement from "../../hook/usehandleKarmaIncrement";

const AddPostContainer = ({ activeButton }) => {
  const { userInfo } = useAuth();
  const [content, setContent] = useState("");
  const { handleKarmaIncrement } = useHandleKarmaIncrement();
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote"],
      [{ header: 1 }, { header: 2 }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["link", "image"],
    ],
  };

  const schema = yup.object({
    titlePost: yup
      .string()
      .max(300, "Can't be more than 300 characters")
      .required("Please fill in your title"),
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
      liked: true,
      disliked: false,
      like: [],
      titlePost: "",
      content: "",
      uid: "",
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    async function dataUser() {
      if (!userInfo.email) return;
      const colRef = collection(db, "users");
      const q = query(colRef, where("email", "==", userInfo.email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((item) => {
        setValue("user", {
          id: item.id,
          ...item.data(),
        });
        // setKarma(item.data()?.karma);
      });
    }
    dataUser();
  }, [userInfo]);

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

  const handleSubmitForm = async (values) => {
    const trimmedContent = content.trim();
    if (!isValid || !userInfo.uid || trimmedContent.length < 20) {
      return;
    }
    const colRef = collection(db, "posts");
    const cloneValues = { ...values };
    try {
      await addDoc(colRef, {
        ...cloneValues,
        uid: uuidv4(),
        liked: true,
        disliked: false,
        like: [userInfo?.uid],
        content: trimmedContent, // Sử dụng content đã được trim
        createAt: serverTimestamp(),
      });
      handleKarmaIncrement();
      toast.success("Add post success");

      setContent("");
      reset({
        title: "",
        content: "",
        like: [],
        liked: true,
        uid: "",
        disliked: false,
        createAt: serverTimestamp(),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="py-3 min-h-[50px]">
          <InputForm
            name="titlePost"
            type="text"
            control={control}
            kind="secondary"
            placeholder="Title"
            className="mt-5"
          />
        </div>
        <div className="w-full entry-content">
          <ReactQuill
            modules={modules}
            onChange={setContent}
            theme="snow"
            value={content}
            className="border-red-900 border-dashed"
          />
        </div>
        <div className="flex justify-end gap-5 px-5">
          <ButtonForm
            activeButton={activeButton}
            isValid={isValid}
            content={content}
            type="submit"
            className="bg-bg-btn-color flex-1 w-full max-w-[100px] mr-10"
          >
            Post
          </ButtonForm>
        </div>
      </form>
    </Fragment>
  );
};

export default AddPostContainer;
