import React from 'react';
import '../css/todo.css';
import Checkmark from './Checkmark';

class Todo  extends React.Component {
    
    state = {
        complete: false
    }

    isCompleted = () => {
        this.setState({complete: !this.state.complete});
    }

     render() {

    return (
        <div className="taskItem">
            {/* <input
            onChange = { this.isCompleted  }
             type="checkbox" name="my-checkbox" id="opt-in"/> */}
             <Checkmark completeFunction = {this.isCompleted}/>
            <p className={this.state.complete ? "done" : null}>{this.props.itemName} </p>
            <button className="delete">x</button>
        </div>
    );
}
  }
  
  export default Todo;