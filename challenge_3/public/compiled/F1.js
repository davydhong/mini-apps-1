"use strict";

var F1 = function F1(props) {
  return React.createElement("div", null, React.createElement("form", {
    id: "F1",
    onSubmit: props.handleNextFields
  }, "Name", React.createElement("input", {
    name: "name",
    placeholder: "name"
  }), React.createElement("br", null), "Email", React.createElement("input", {
    name: "email",
    placeholder: "email"
  }), React.createElement("br", null), "Password", React.createElement("input", {
    type: "password",
    name: "password",
    placeholder: "password"
  }), React.createElement("input", {
    type: "submit",
    value: "next"
  })));
};