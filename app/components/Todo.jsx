var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function () {
        var {id, text, completed, createdAt, completedAt} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createdAt;

            if (completed) {
                message = 'Completed ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format("ddd, MMM Do YYYY @ h:mm:ss a");
        };

        return (
            <div className={todoClassName} onClick={() => {
                this.props.onToggle(id);
            }}>
            <div>
                 <input type="checkbox" checked={completed}/>
            </div>
            <div className="todo__subtext">
                <p id="ptext">{text}</p>
                <p id="dtext">{renderDate()}</p>
            </div>                 
            </div>
        )
    }
});

module.exports = Todo;