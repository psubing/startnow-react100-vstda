import React from 'react';

export default class Addtodo extends React.Component {
  render() {
    return (
        <div className='col-sm-4'>
            <div className='panel panel-default'>
                <div className='panel-heading'>
                    <h4>Add New Todo</h4>
                </div>
                <div className='panel-body'>
                    <form className='form-group'>
                        <div className='form-group'>
                            <textarea
                                className="create-todo-text"
                                id="textarea"
                                type="text"
                                placeholder="I want to..."
                                rows="7"
                                onChange={this.props.handleChange}></textarea>
                        </div>
                        <div className="form-group">
                            <br/>
                            <select
                                className="create-todo-priority"
                                id="select"
                                value={this.props.select}
                                onChange={this.props.handleChange}>
                                <option>How much of a priority is this?</option>
                                <option value="1">Low Priority</option>
                                <option value="2">Medium Priority</option>
                                <option value="3">High Priority</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div className="panel-footer">
                    <button 
                        id="create-todo" 
                        className="create-todo btn btn-success btn-block" 
                        onClick={this.props.handleSubmit}>ADD
                    </button>
                </div>
            </div>
        </div>
    );
  }
}
