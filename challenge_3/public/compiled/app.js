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
      view: 0
    };
    _this.handleNextFields = _this.handleNextFields.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleCheckOut = _this.handleCheckOut.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleFinish = _this.handleFinish.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(App, [{
    key: "handleNextFields",
    value: function handleNextFields() {
      this.setState({
        view: this.state.view + 1
      });
    }
  }, {
    key: "handleCheckOut",
    value: function handleCheckOut() {
      this.setState({
        view: 1
      });
    }
  }, {
    key: "handleFinish",
    value: function handleFinish() {
      this.setState({
        view: 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var views = [React.createElement(F0, null), React.createElement(F1, {
        handleNextFields: this.handleNextFields
      }), React.createElement(F2, {
        handleNextFields: this.handleNextFields
      }), React.createElement(F3, {
        handleFinish: this.handleFinish
      })];
      var toView = views[this.state.view];
      console.log(this.state.view);
      return React.createElement("div", null, React.createElement("div", null, React.createElement(CheckOut, {
        handleCheckOut: this.handleCheckOut
      })), toView);
    }
  }]);

  return App;
}(React.Component);