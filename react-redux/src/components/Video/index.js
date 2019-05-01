import React from "react";
import { connect } from "react-redux";

const Video = props => {
  return (
    <div>
      {props.activeModule && <h1>Módulo {props.activeModule.title}</h1>}
      {props.activeLesson && <h1>Aula {props.activeLesson.title}</h1>}
    </div>
  );
};

export default connect(state => {
  return {
    activeLesson: state.course.activeLesson,
    activeModule: state.course.activeModule
  };
})(Video);
