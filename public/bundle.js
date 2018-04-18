'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lib = require('./lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const { createElement } = React // removed for JSX
var render = _reactDom2.default.render;

/**
 * Removed for JSX
 
 const style = {
     backgroundColor: 'lightblue',
     color: 'white',
     fontFamily: 'verdana'
    }
    const title = createElement(
        'h1',
        { id: 'title', className: 'header', style: style },
        'Hello World'
    )
    */

render(
// title, // removed for JSX
/*
    <h1 id='title' 
    className='header' 
    style={{
        backgroundColor: 'lightblue',
        color: 'white',
        fontFamily: 'verdana'
    }}>
    Hello World
    </h1>,
  */

_react2.default.createElement(
    'div',
    null,
    _lib.hello,
    _lib.goodbye
), document.getElementById('app'));
