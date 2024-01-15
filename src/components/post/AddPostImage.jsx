import React, { Fragment, useEffect } from "react";
import InputForm from "../input/InputForm";
import { useFirebaseImage } from "../../context/useFirebaseImage";
import ButtonImage from "../button/ButtonImage";
import { useAuth } from "../../context/auth-context";
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
import { toast } from "react-toastify";
import useHandleKarmaIncrement from "../../hook/usehandleKarmaIncrement";

const AddPostImage = ({ activeButton }) => {
  const { userInfo } = useAuth();
  const { handleKarmaIncrement } = useHandleKarmaIncrement();

  const schema = yup.object({
    titleImage: yup
      .string()
      .max(300, "Can't be more than 300 characters")
      .required("Please fill in your title"),
  });

  const {
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { isValid, errors },
    control,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      titleImage: "", // Thêm giá trị mặc định cho trường title
      image: [],
      liked: true,
      disliked: false,
      like: [userInfo?.uid],
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

  const handlePostImage = async (values) => {
    if (!isValid || !image || !userInfo.uid) {
      return;
    }
    const colRef = collection(db, "posts");
    const cloneValues = { ...values };
    try {
      await addDoc(colRef, {
        ...cloneValues,
        liked: true,
        disliked: false,
        like: [userInfo?.uid],
        image,
        createAt: serverTimestamp(),
      });
      handleKarmaIncrement();
      toast.success("Add post success");
      reset({
        title: "",
        liked: true,
        disliked: false,
        createAt: serverTimestamp(),
      });
      handleResetUpload();
    } catch (error) {
      console.error(error);
    }
  };

  const {
    handleRemoveImage,
    handleResetUpload,
    handleSelectImage = () => {},
    image,
    progress = 0,
  } = useFirebaseImage(setValue, getValues);

  return (
    <Fragment>
      <form onSubmit={handleSubmit(handlePostImage)}>
        <div className="py-3 min-h-[50px]">
          <InputForm
            name="titleImage"
            type="text"
            control={control}
            kind="secondary"
            placeholder="Title"
            className="mt-5"
          ></InputForm>
        </div>
        <div className="relative  w-full h-[300px] border-dashed border p-2  overflow-auto  border-border-color rounded-lg">
          {/* process */}
          {image.length > 0 && (
            <div
              style={{
                width: `${Math.ceil(progress)}%`,
              }}
              className="absolute bottom-0 left-0 w-10 h-1 transition-all bg-white"
            ></div>
          )}
          {image && image.length > 0 ? (
            <div>
              <div className="relative flex items-center justify-start gap-3 mt-20 overflow-auto">
                <div className="flex items-center gap-3">
                  {image.length > 0 &&
                    image.map((item, index) => (
                      <div
                        key={index}
                        className="overflow-hidden rounded-md group relative w-full max-w-[120px] h-[120px] p-1 border-2 border-border-color "
                      >
                        <img
                          src={item}
                          className="object-cover w-full max-w-[120px] h-[120px]"
                          alt=""
                        />
                        {/* close btn */}
                        <div
                          onClick={() => handleRemoveImage(index)}
                          className="absolute invisible hidden p-2 bg-black rounded-full prev group-hover:block group-hover:visible top-2 right-2"
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2.5"
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="flex items-center rounded-md p-1 border-2 border-dashed border-border-color justify-center max-w-[120px] h-[120px] w-full">
                  <label
                    htmlFor="image"
                    className="text-3xl font-semibold cursor-pointer text-text-color"
                  >
                    +
                  </label>
                  <input
                    onChange={handleSelectImage}
                    type="file"
                    name=""
                    className="hidden"
                    id="image"
                  />
                </div>
              </div>
            </div>
          ) : image.length === 0 ? (
            <div className="flex items-center justify-center mt-28">
              <label
                htmlFor="image"
                className="p-3 font-semibold border rounded-3xl"
              >
                <input
                  onChange={handleSelectImage}
                  type="file"
                  name=""
                  className="hidden"
                  id="image"
                />
                Upload image
              </label>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-end gap-5 px-5">
          <ButtonImage
            activeButton={activeButton}
            isValid={isValid}
            image={image}
            type="submit"
            className="bg-bg-btn-color flex-1 w-full max-w-[100px] mr-10"
          >
            Post
          </ButtonImage>
        </div>
      </form>
    </Fragment>
  );
};

export default AddPostImage;
