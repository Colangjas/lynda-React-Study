const { createElement } = React // removed for JSX
const { render } = ReactDOM

/**
 * Removed for JSX
 */
 
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
    
render(
    title, // removed for JSX
    
    // <h1 id='title' 
    // className='header' 
    // style={{
    //     backgroundColor: 'lightblue',
    //     color: 'white',
    //     fontFamily: 'verdana'
    // }}>
    // Hello World
    // </h1>,
    document.getElementById('app')
);

