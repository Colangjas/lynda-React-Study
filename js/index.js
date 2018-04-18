import React from 'react'
import ReactDOM from 'react-dom'
import { hello, goodbye } from './lib';

//const { createElement } = React // removed for JSX
const { render } = ReactDOM

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
 
    <div>
        {hello}
        {goodbye}
    </div>,
    document.getElementById('app')
);


