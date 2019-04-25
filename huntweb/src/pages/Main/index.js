import React, { Fragment } from "react";
import Header from "../../components/Header";
import Clock from "../../components/Clock";
import "./styles.css";
const Main = () => {
  return (
    <Fragment>
      <Header />
      <Clock />
    </Fragment>
  );
};
export default Main;
