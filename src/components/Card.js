import React, { Component } from 'react';

class Card extends Component {
  handleRemoveTodo(index){
    if(window.confirm('Are you sure of deleting this task')){
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      })
    }    
  }
  render () {
    console.log('Card');
    console.log(this.props.todo);
    return (        
      <div className="col-md-3">
        <div className="card mb-3">
          <div className="card-header">
            <h3>
              {this.props.todo.title}
            </h3>
            <span className="badge badge-pill badge-danger ml-2">
              {this.props.todo.priority}
            </span>
          </div>
          <div className="card-body">
            <p>{this.props.todo.description}</p>
            <p><mark>{this.props.todo.responsible}</mark></p>
          </div> 
          <div className="card-footer">
            <button
              className="btn btn-danger"
              onClick={this.handleRemoveTodo(this.props.index)}
            >
            Delete
            </button>
          </div>         
        </div>      
      </div>         
    )
  }
}

export default Card;