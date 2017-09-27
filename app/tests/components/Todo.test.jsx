//libraries
var React =require('react');
var ReactDOM =require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

//testing component
var Todo = require('Todo');

//test loading of Todo component
describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });
});