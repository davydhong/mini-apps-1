"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      view: 0,
      tempID: ''
    };
    _this.handleNextFields = _this.handleNextFields.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleCheckOut = _this.handleCheckOut.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleFinish = _this.handleFinish.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  } // this handle pertains to the inital page


  _createClass(App, [{
    key: "handleCheckOut",
    value: function handleCheckOut() {
      this.setState({
        view: 1
      });
    } // this handle pertains to the F1, and F2 pages

  }, {
    key: "handleNextFields",
    value: function handleNextFields(event) {
      var _this2 = this;

      postViaAxios.call(this, event, function (response) {
        _this2.setState({
          view: _this2.state.view + 1
        });

        if (!!response.data) _this2.setState({
          tempID: response.data
        });
      });
    } // this handle pertains to F3 page, returns to F0

  }, {
    key: "handleFinish",
    value: function handleFinish(event) {
      var _this3 = this;

      postViaAxios.call(this, event, function (response) {
        _this3.setState({
          tempID: '',
          view: 0
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      // view stores all the pages in array. the state determines which page will be played.
      var views = [React.createElement(F0, null), React.createElement(F1, {
        handleNextFields: this.handleNextFields
      }), React.createElement(F2, {
        handleNextFields: this.handleNextFields
      }), React.createElement(F3, {
        handleFinish: this.handleFinish
      })];
      var toView = views[this.state.view];
      return React.createElement("div", null, React.createElement("div", null, React.createElement(CheckOut, {
        handleCheckOut: this.handleCheckOut
      })), toView);
    }
  }]);

  return App;
}(React.Component);

var postViaAxios = function postViaAxios(event, callback) {
  event.preventDefault();
  var dataToSend = {}; // event.target returns the form DOM

  dataToSend.page = event.target.id; // selects all the input fields that is not type=submit

  var dataFields = event.target.querySelectorAll("input:not([type='submit'])"); // takes the data from the fields and puts them into the object.

  for (var i = 0; i < dataFields.length; i++) {
    dataToSend[dataFields[i].name] = dataFields[i].value;
  }

  var app = this;
  if (!!app.state.tempID) dataToSend.objectId = app.state.tempID;
  axios.post('/post', dataToSend).then(function (response) {
    callback(response);
  }).catch(function (error) {
    console.log(error);
  });
};