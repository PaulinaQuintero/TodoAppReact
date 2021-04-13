import React from 'react';
import '../css/todo.css'
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks: ["Hacer la comida", "Lavar ropa", "Hacer la tarea de la escuela", "Pasear al perro", "Lavar los trastes"]
        }
        
     }
    render() {
        return (
            <div className="list-wrapper">
                { this.state.tasks.map((item) => <Todo key={item.toString()} itemName={item} />) }
            </div>
        )
    }
}

// function todos() {
//     let arr = [];
//     for(let index = 0; index < 4; index++) {
//         arr.push(<Todo />)
//     }
//     return arr;
// }

// function Todolist() {
//     return (
//       <div className="list-wrapper">
//           {
//               todos()
//           }
//       </div>
//     );
//   }
  
  export default TodoList;