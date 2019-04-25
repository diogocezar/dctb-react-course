import React, { Fragment } from "react";
import Header from "../../components/Header";
import Clock from "../../components/Clock";
import List from "../../components/List";
import "./styles.css";
const Main = () => {
  return (
    <Fragment>
      <Header />
      <Clock />
      <List />
    </Fragment>
  );
};
export default Main;
