import React from 'react';
import TodoListItem from './todolistitem'
import EditTodo from './editTodo'

export default class Todolist extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {    
    return (
        <div className="col-sm-8">
            <div className="panel panel-default">
                < div className="panel-heading">
                    <h4>View todos</h4>
                </div>
                <div className="form panel panel-body">
                    <ul className="list-group"> 
                        <TodoListItem 
                            todo={this.props.todo} 
                            handleChange={this.props.handleChange}
                            handleDelete={this.props.handleDelete} 
                            toggleEdit={this.props.toggleEdit} 
                            editEnabled={this.props.editEnabled} 
                            onCancel={this.props.onCancel}
                            onSave={this.props.onSave} 
                            updateText={this.props.updateText}
                            updateSelect={this.props.updateSelect}
                            updateCheckbox={this.props.updateCheckbox}/>
                    </ul>
                </div>
            </div>
        </div>
        );
    }
}