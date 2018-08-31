"use strict";

var F3 = function F3(props) {
  return React.createElement("form", null, "Credit Card #", React.createElement("input", {
    name: "card_number",
    placeholder: "####-####-####-####"
  }), React.createElement("br", null), "Exp", React.createElement("input", {
    name: "exp_month",
    placeholder: "Month"
  }), React.createElement("input", {
    name: "exp_year",
    placeholder: "Year"
  }), "CVV", React.createElement("input", {
    name: "card_cvv",
    placeholder: "### or ####"
  }), React.createElement("br", null), "Zip", React.createElement("input", {
    name: "billing_zip",
    placeholder: "Zip"
  }), React.createElement("br", null), React.createElement("button", {
    onClick: props.handleFinish
  }, "Finish"));
};