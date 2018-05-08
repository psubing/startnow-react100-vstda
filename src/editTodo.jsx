import React from 'react';

export default class EditTodo extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <h3>Edit your todo</h3>
                <div className='form-group'>
                                <textarea 
                                  className="update-todo-text"
                                  id="updateText"
                                  type="text"
                                  placeholder="I want to..."
                                  rows="7"
                                  onChange={this.props.handleChange}></textarea>
                            </div>
                            <div className="form-group">
                                <br/>
                                <select
                                  className="update-todo-priority"
                                  id="updateSelect"
                                  value={this.props.updateSelect}
                                  onChange={this.props.handleChange}>
                                    <option>How much of a priority is this?</option>
                                    <option value="1">Low Priority</option>
                                    <option value="2">Medium Priority</option>
                                    <option value="3">High Priority</option>
                                </select>
                                <button className="float-right" onClick={this.props.onCancel}>Cancel</button>
                                <button className="update-todo float-right" onClick={this.props.onSave}>Save</button>
                            </div>
            </div>
        )
    }
}