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

        //Expect createdAt to be a number
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should toggle completed value when handleToggle called', () => {
        var todoData = {
            id: 11,
            text: 'test features',
            completed: false,
            createdAt: 0,
            completedAt: undefined
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        //Check that todos first item has completed value of false,
        expect(todoApp.state.todos[0].completed).toBe(false);        

        //then call handleToggle with 11.
        todoApp.handleToggle(11);

        //Verify that value is true
        expect(todoApp.state.todos[0].completed).toBe(true);

        //Expect completedAt to be a number
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });
    //Test hat when toggle todo from completed to false, completeAt get removed
    it('should toggle todo from completed to incompleted', () => {
        var todoData = {
            id: 11,
            text: 'test features',
            completed: true,
            createdAt: 0,
            completedAt: 123
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        //Check that todos first item has completed value of false,
        expect(todoApp.state.todos[0].completed).toBe(true);        

        //then call handleToggle with 11.
        todoApp.handleToggle(11);

        //Verify that value is true
        expect(todoApp.state.todos[0].completed).toBe(false);

        //Expect completedAt to be a number
        expect(todoApp.state.todos[0].completedAt).toNotExist();
    });

});