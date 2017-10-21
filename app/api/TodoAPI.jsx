var $ = require('jquery');

module.exports = {
    setTodos: function (todos) {
        //validate todo is an array, stringify converts a array into an string
        if ($.isArray(todos)) {
            //localStorage can only handle string data
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function () {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            //parse converts strings into arrays
            todos = JSON.parse(stringTodos);
        } catch (e) {

        }
        //turnary statement checks if todos an array otherwise returns an empty array
        return $.isArray(todos) ? todos: [];
        //code below is same as code above. above code more efficient
        // if ($.isArray(todos)) {
        //     return todos;
        // } else {
        //     return [];
        // }
    },
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // Filter by showComplete
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        // Filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });

        // Sort todos with non-completed first
        filteredTodos.sort((a, b) => {
            if(!a.completed && b.completed) {
                return -1;                
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });

        return filteredTodos;
    }
};