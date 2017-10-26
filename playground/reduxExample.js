
//redux creates a single object to maintain the site state as in below
var reduxState = {
    searchText: 'Dog',
    showCompleted: false,
    todos: [{
        id: '123',
        text: 'Walk the dog'
    }]
};

//redux then uses actions to manipulate the state object
var action = {
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'something else'
}