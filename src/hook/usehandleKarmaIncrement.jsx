import React from "react";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfigure";
import { useAuth } from "../context/auth-context";

const useHandleKarmaIncrement = () => {
  const { userInfo } = useAuth();

  const handleKarmaIncrement = async () => {
    if (!userInfo) return;
    const userDocRef = doc(db, "users", userInfo.uid);

    try {
      const docSnapshot = await getDoc(userDocRef);
      if (docSnapshot.exists()) {
        await updateDoc(userDocRef, {
          karma: Number(docSnapshot?.data()?.karma) + 1,
        });
        console.log("Tăng Karma thành công!");
      } else {
        console.log("Tài liệu không tồn tại");
      }
    } catch (error) {
      console.error("Lỗi khi tăng karma:", error);
    }
  };

  return { handleKarmaIncrement }; // Bạn có thể thay đổi giá trị trả về tùy thuộc vào nhu cầu của bạn
};

export default useHandleKarmaIncrement;
