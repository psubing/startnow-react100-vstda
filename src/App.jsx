import React, { Component } from 'react';
import Addtodo from './addtodo';
import Header from './header';
import Todolist from './todolist';
import EditTodo from './editTodo';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textarea: '',
      select: '',
      todo: [],
      editText: '',
      finishedTodo: false,
      editEnabled: false,
      updateText: '',
      updateSelect: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.updateCheckbox = this.updateCheckbox.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  };

  handleSubmit(event) {
    event.preventDefault();

    var push = {text: this.state.textarea, priority: parseFloat(this.state.select), listId: Date.now(), editEnabled: false}
    var todos = this.state.todo
    todos.push(push)
    this.setState ({ todo: todos})
  }

  handleDelete(event) {
    var dataKey = event.currentTarget.parentNode.getAttribute('data-key')
    var deleted = this.state.todo.filter(function (el) {
      return el.listId != dataKey
    })
    this.setState({ todo: deleted })
  }

  toggleEdit(event) {
    this.setState({ editEnabled: true })
      }
  
  onCancel(event) {
    this.setState({ editEnabled: false })
  }

  onSave(event) {
    var state = this.state.todo
    var dataKey = event.currentTarget.parentNode.parentNode.parentNode.parentNode.getAttribute('data-key')
    var objIndex = state.findIndex((obj => obj.listId == dataKey))
    if (this.state.updateText !== '') {
       state[objIndex].text = this.state.updateText
    } else {
       state[objIndex].text = state[objIndex].text
    }
    if (this.state.updateSelect > 0) {
       state[objIndex].priority = parseFloat(this.state.updateSelect)}
    this.setState({ editEnabled: false})
  }

  updateCheckbox(event){
    var state = this.state.todo
    var dataKey = event.currentTarget.parentNode.getAttribute('data-key')
    console.log(event.currenTarget.parentNode)
    var objIndex = state.findIndex((obj => obj.listId == dataKey))
    state[objIndex].finishedTodo = true
    this.setState({ todo: state })
    console.log(dataKey)
  };

  render() {
    return (
      <div>
        <Header />
        <Addtodo
          todo={this.state.todo}
          handleSubmit={this.handleSubmit} 
          handleChange={this.handleChange}/>
        <Todolist 
          todo={this.state.todo}
          handleChange={this.handleChange} 
          handleDelete={this.handleDelete} 
          toggleEdit={this.toggleEdit} 
          onCancel={this.onCancel} 
          onSave={this.onSave}
          editEnabled={this.state.editEnabled} 
          updateText={this.state.updateText}
          updateSelect={this.state.updateSelect}
          updateCheckbox={this.updateCheckbox}/>
      </div>
    );
  }
}

export default App;
