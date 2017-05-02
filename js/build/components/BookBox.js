'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BookNode = require('./BookNode');

var _BookNode2 = _interopRequireDefault(_BookNode);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookBox = function (_React$Component) {
  _inherits(BookBox, _React$Component);

  function BookBox(props) {
    _classCallCheck(this, BookBox);

    var _this = _possibleConstructorReturn(this, (BookBox.__proto__ || Object.getPrototypeOf(BookBox)).call(this, props));

    _this.state = {
      data: [],
      needle: 'react'
    };

    _this._search = _this._search.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.loadAjax = _this.loadAjax.bind(_this);
    return _this;
  }

  _createClass(BookBox, [{
    key: '_search',
    value: function _search(e) {
      var ENTER = 13;
      if (e.keyCode == ENTER) {
        this.loadAjax(this.state.needle);
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(ev) {
      this.setState({ needle: ev.target.value });
    }
  }, {
    key: 'loadAjax',
    value: function loadAjax(needle) {
      var _this2 = this;

      var url = 'https://www.googleapis.com/books/v1/volumes?&q=';
      _superagent2.default.get(url + this.state.needle).set('Content-Type', 'application/json').end(function (err, data) {
        if (err) {
          console.log('error');
        }
        _this2.setState({
          data: data.body.items
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', { placeholder: '\u691C\u7D22', onKeyDown: this._search, onChange: this.handleChange, defaultValue: this.state.needle }),
        _react2.default.createElement(_BookNode2.default, { data: this.state.data })
      );
    }
  }]);

  return BookBox;
}(_react2.default.Component);

exports.default = BookBox;