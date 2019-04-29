import React from "react";
import { Provider } from "react-redux";
import SideBar from "./components/SideBar";
import Video from "./components/Video";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <h1>React + Redux</h1>
      <Video />
      <SideBar />
    </Provider>
  );
}

export default App;
