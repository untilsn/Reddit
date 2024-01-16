import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";

export function useFirebaseAvatar() {
  const [avatarImage, setAvatarImage] = useState("");

  const handleUploadAvatar = (file) => {
    const storage = getStorage();

    const storageRef = ref(storage, "avatars/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setAvatarImage(downloadURL);
        });
      }
    );
  };

  const handleSelecteAvatar = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    handleUploadAvatar(file);
  };

  return {
    avatarImage,
    handleSelecteAvatar,
  };
}
