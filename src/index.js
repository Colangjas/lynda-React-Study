import React from 'react'
import { render } from 'react-dom'
import { hello, goodbye } from './lib';
import { BikeDayCount } from './components/BikeDayCount'
import { BikeDayList } from './components/bikedaylist'

window.React = React

//const { createElement } = React // removed for JSX
// const { render } = ReactDOM

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
    
/*
render(
  
   // title, // removed for JSX
    <h1 id='title' 
    className='header' 
    style={{
        backgroundColor: 'lightblue',
        color: 'white',
        fontFamily: 'verdana'
    }}>
    Hello World
    </h1>,
        <div>
        {hello}
        <p>This uses CSS styling</p>
        {goodbye}
        <p>This uses Sass styling. Both are generated from a JSON file</p>
        <BikeDayCount total={50}
        sun={20}
        wind={10}
        goal={100} />
        <BikeDayList days={
            [
                {
                    resort: "Squaw Valley",
                    date: new Date("1/2/2019"),
                    sun: true,
                    wind: false,
                },
                {
                    resort: "Kirkwood",
                    date: new Date("3/28/2019"),
                    sun: false,
                    wind: false,
                },
                {
                    resort: "Marmont Basin",
                    date: new Date("4/2/2019"),
                    sun: false,
                    wind: true,
                } 
            ]
        } 
        />
        </div>,
        document.getElementById('app')
    ); 
    */



render (
    <BikeDayList days={
            [
                {
                    resort: "Squaw Valley",
                    date: new Date("1/2/2019"),
                    sun: true,
                    wind: false,
                },
                {
                    resort: "Kirkwood",
                    date: new Date("3/29 /2019"),
                    sun: false,
                    wind: false,
                },
                {
                    resort: "Marmont Basin",
                    date: new Date("4/2/2019"),
                    sun: false,
                    wind: true,
                } 
            ]
        } />,
    document.getElementById('app')
)

/**
 * 
 * 
 */