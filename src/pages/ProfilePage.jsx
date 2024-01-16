import React, { Fragment } from "react";
import ProfileAuth from "../components/profile/ProfileAuth";

const ProfilePage = () => {
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
