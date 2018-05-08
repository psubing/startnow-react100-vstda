import React from 'react';
import EditTodo from './editTodo'

export default class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
    } 

    render(){
    if (this.props.todo.length > 0 ) {
        return (
        <div>
            {this.props.todo.map(p => {
                switch(p.priority) {
                    case(1):
                        return <li className={"list-group-item list-group-item-success" + (this.props.finishedTodo ? "strike-through" : "")} key={p.listId} data-key={p.listId} editEnabled={this.props.editEnabled}>
                                    <input type="checkbox" onChange={e => this.props.updateCheckbox(e)}/>
                                    {p.text}
                                    <span className="glyphicon glyphicon-trash delete-todo btn btn-link float-right" onClick={this.props.handleDelete}></span>
                                    <span className="glyphicon glyphicon-edit edit-todo btn btn-link float-right" onClick={this.props.toggleEdit}></span>
                                    <div>
                                        { this.props.editEnabled ? <EditTodo onCancel={this.props.onCancel} handleChange={this.props.handleChange} updateText={this.props.updateText} updateSelect={this.props.updateSelect} onSave={this.props.onSave}/> : null }
                                    </div>
                                </li>
                        break;
                    case(2):
                        return <li className="list-group-item list-group-item-warning" key={p.listId} data-key={p.listId}>
                                    <input type="checkbox" />
                                    {p.text}
                                    <span className="glyphicon glyphicon-trash delete-todo btn btn-link float-right" onClick={this.props.handleDelete}></span>
                                    <span className="glyphicon glyphicon-edit edit-todo btn btn-link float-right" onClick={this.props.toggleEdit}></span>
                                    <div>
                                        { this.props.editEnabled ? <EditTodo onCancel={this.props.onCancel} handleChange={this.props.handleChange} updateText={this.props.updateText} updateSelect={this.props.updateSelect} onSave={this.props.onSave}/> : null }
                                    </div>
                                    </li>
                        break;
                    case(3):
                        return <li className="list-group-item list-group-item-danger" key={p.listId} data-key={p.listId}>
                                    <input type="checkbox" />
                                    {p.text}
                                    <span className="glyphicon glyphicon-trash delete-todo btn btn-link float-right" onClick={this.props.handleDelete}></span>
                                    <span className="glyphicon glyphicon-edit edit-todo btn btn-link float-right" onClick={this.props.toggleEdit}></span>
                                    <div>
                                        { this.props.editEnabled ? <EditTodo onCancel={this.props.onCancel} handleChange={this.props.handleChange} updateText={this.props.updateText} updateSelect={this.props.updateSelect} onSave={this.props.onSave}/> : null }
                                    </div>
                                </li>
                        break;
                    default:
                    break;
                    }
                })}
        </div>
        )
        }
        return (
            <div>
                <h4>Welcome to Very Simple Todo App!</h4>
                <h5>Get started now by adding a new todo on the left</h5>
            </div>
        )
    }
}