import React, { Fragment } from "react";
import Header from "../components/layout/Header";
import FrontPage from "./FrontPage";

const HomePage = () => {
  return (
    <Fragment>
      <Header>
        <FrontPage></FrontPage>
      </Header>
    </Fragment>
  );
};

export default HomePage;
