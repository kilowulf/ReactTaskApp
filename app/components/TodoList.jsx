var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
    render: function () {
        var {todos} = this.props;
        var renderTodos = () => {
            return todos.map((todo) => {
                return (
                    /*{...todo}spread operator allows 
                    all the elements of object to be
                     props which are in turn retrievable.*/
                    <Todo key={todo.id} {...todo}/>
                    /*key property is necessary when iterating an array */
                );
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

module.exports = TodoList;