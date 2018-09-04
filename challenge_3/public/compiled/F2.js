"use strict";

var F2 = function F2(props) {
  return React.createElement("form", {
    id: "F2",
    onSubmit: props.handleNextFields
  }, "Address Line1", React.createElement("input", {
    name: "address_line1",
    placeholder: "Address Line1"
  }), React.createElement("br", null), "Address Line2", React.createElement("input", {
    name: "address_line2",
    placeholder: "Address Line2"
  }), React.createElement("br", null), "City", React.createElement("input", {
    name: "address_city",
    placeholder: "City"
  }), "State", React.createElement("input", {
    name: "address_state",
    placeholder: "State"
  }), "Zip", React.createElement("input", {
    name: "address_zip",
    placeholder: "Zip"
  }), React.createElement("br", null), "Phone Number", React.createElement("input", {
    placeholder: "Phone Number"
  }), React.createElement("br", null), React.createElement("input", {
    type: "submit",
    value: "next"
  }));
};