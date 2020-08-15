import React, {Component} from 'react';

class ToDosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: 
            [
                {id: 1, description: 'Learn React', done: false, targetDate: new Date()},
                {id: 2, description: 'Bike 50 miles', done: false, targetDate: new Date()},
                {id: 3, description: 'Pet Chew', done: false, targetDate: new Date()}
            ]
        }
    }

    render() {
        return(
            <div>
                <h1>ToDos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Description</th>
                                <th>Is Completed</th>
                                <th>Target Date</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.id}</td>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                        </tr>
                                )
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }  
  }

  export default ToDosComponent;