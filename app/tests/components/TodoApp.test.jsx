//libraries
var React =require('react');
var ReactDOM =require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

//testing component
var TodoApp = require('TodoApp');

//test for loading TodoApp component
describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    //test functionality of adding a task to todo list
    it('should add todo to the todos state on handleAddTodo', () => {
        var todoText = 'test text';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
    })
});