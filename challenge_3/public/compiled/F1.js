"use strict";

var F1 = function F1(props) {
  return React.createElement("div", null, React.createElement("form", null, "Name", React.createElement("input", {
    name: "name",
    placeholder: "name"
  }), React.createElement("br", null), "Email", React.createElement("input", {
    name: "email",
    placeholder: "email"
  }), React.createElement("br", null), "Password", React.createElement("input", {
    name: "password",
    placeholder: "password"
  })), React.createElement("button", {
    onClick: function onClick() {
      props.handleNextFields();
    }
  }, "Next"));
};

var name = document.querySelector("input[name='name']").value;
var email = document.querySelector("input[name='email']").value;
var password = document.querySelector("input[name='password']").value; // document.getElementsByName("card_number")[0].value