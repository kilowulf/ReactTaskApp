//load required modules, components
var React = require('react');
var ReactDOM =require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

//destructuring syntax to initialize multiple modules

//Load foundation; style!css! loader format

//App CSS Loader
require('style!css!sass!applicationStyles')


//INITIALIZATION CODE

ReactDOM.render(
        //can add elements, classes, objects
        //Use Router component to direct page display/ Route declares a path
        //IndexRoute takes a single argument
        <TodoApp/>,
   document.getElementById('app')
);
//two types of data in a component;
// props and state. props get passed to a component when initialized.
// state data is maintained and updated by the component,
// but a component doesn't update its props.
//single responsibility principle
    