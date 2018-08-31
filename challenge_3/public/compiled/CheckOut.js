"use strict";

var CheckOut = function CheckOut(props) {
  return React.createElement("button", {
    onClick: props.handleCheckOut
  }, "Check Out");
};