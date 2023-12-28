import React, { Fragment } from "react";

const UserModalFill = ({ children, onClick = () => {}, ...props }) => {
  return (
    <Fragment>
      <h1
        onClick={onClick}
        className="flex items-center gap-2 px-10 py-4 text-sm font-medium hover:bg-main-dark-lite text-text-color"
      >
        {children}
      </h1>
    </Fragment>
  );
};

export default UserModalFill;
