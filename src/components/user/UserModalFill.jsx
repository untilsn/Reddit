import React, { Fragment } from "react";

const UserModalFill = ({ children, onClick = () => {}, ...props }) => {
  return (
    <Fragment>
      <h1
        onClick={onClick}
        className="flex text-[15px] items-center gap-4 px-5 py-4 text-base font-medium hover:bg-main-dark-lite text-text-color"
      >
        {children}
      </h1>
    </Fragment>
  );
};

export default UserModalFill;
