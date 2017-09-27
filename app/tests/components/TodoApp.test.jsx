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
});