var React = require('react');
var TodoList = require('TodoList');
//Define App with createClass
var TodoApp = React.createClass({

    //returns the default state of the application
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                }, {
                    id: 2,
                    text: 'Clean the yard'
                }, {
                    id: 3,
                    text: 'Leave mail on porch.'
                }, {
                    id: 4,
                    text: 'Chill on a video game'
                }
            ]
        };
    },
    render: function () {
        var {todos} = this.state;

        return (
            <div>
            <TodoList todos={todos}/>
            </div>
        )
    }
});

module.exports = TodoApp;