import React, { Fragment } from "react";
import PostDetailUser from "../components/post/PostDetailUser";
import PostItem from "../components/post/PostItem";
import PostItemUser from "../components/post/PostItemUser";
import { useParams, useSearchParams } from "react-router-dom";
import ProfileUser from "../components/profile/ProfileUser";
import { useAuth } from "../context/auth-context";
import ProfileAuth from "../components/profile/ProfileAuth";

const ProfilePage = () => {
  const { slug } = useParams();
  const { userInfo } = useAuth();

  return (
    <Fragment>
      <div className="container mt-32">
        <div>
          <ProfileAuth></ProfileAuth>
        </div>
        <div></div>
      </div>
    </Fragment>
  );
};

export default ProfilePage;
