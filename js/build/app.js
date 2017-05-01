'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _BookBox = require('./components/BookBox');

var _BookBox2 = _interopRequireDefault(_BookBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  'h1',
  null,
  _react2.default.createElement(_Logo2.default, null),
  'BookSearch',
  _react2.default.createElement(_BookBox2.default, null)
), document.getElementById('app'));