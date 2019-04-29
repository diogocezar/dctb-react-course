import React, { Component } from "react";
import { connect } from "react-redux";

class SideBar extends Component {
  render() {
    const { modules } = this.props;
    return (
      <aside>
        {modules.map(module => {
          return (
            <div key={module.id}>
              <strong>{module.title}</strong>
              <ul>
                {module.lessons.map(lesson => {
                  return <li key={lesson.id}>{lesson.title}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </aside>
    );
  }
}

export default connect(state => ({ modules: state }))(SideBar);
