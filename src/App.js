import React, {Component} from "react";
// import logo from './logo.svg';
// import './App.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "Adam",
            userLastName: "Janiczek",
            toDoItems: [{action: "Kupić kawiaty", done: false},
                {action: "Wziąć buty", done: false},
                {action: "Zebrać bilety", done: true},
                {action: "Zadzwonić do Jurka", done: false}],
            newItemText: ""
        }
    }

    updateNewTextValue = (event) => {
        this.setState({newItemText: event.target.value})
    }

    createNewTodo = () => {
        if (!this.state.toDoItems.find(item => item.action === this.state.newItemText)) {
            this.setState({
                toDoItems: [...this.state.toDoItems, {action: this.state.newItemText, done: false}],
                newItemText: ""
            });
        }
    }

    changeStateData = () => {
        this.setState({
                userName: this.state.userName === "Arek" ? "Adam" : "Arek"
            }
        )
    }

    toggleTodo = (todo) => this.setState({
        toDoItems:
            this.state.toDoItems.map(item => item.action === todo.action
                ? {...item, done: !item.done} : item)
    });

    todoTableRows = () => this.state.toDoItems.map(item =>
        <tr key={item.action}>
            <td>{item.action}</td>
            <td>
                <input type="checkbox" checked={item.done}
                       onChange={() => this.toggleTodo(item)}/>
            </td>
        </tr>);

    render() {
        return (
            <div>
                <h4 className="bg-primary text-white text-center p-2">
                    Lista zadań użytkownika {this.state.userName}
                    (Liczba zadań: {this.state.toDoItems.filter(t => !t.done).length})
                    <button className="btn btn-primary m-2"
                            onClick={this.changeStateData}>
                        Zmień
                    </button>
                </h4>

                <div className="container-fluid">
                    <div className="my-1">
                        <input className="form-control" value={this.state.newItemText}
                               onChange={this.updateNewTextValue}/>
                        <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>Dodaj</button>
                    </div>
                  <table className="table table-striped table-bordered">
                    <thead>
                    <tr><th>Opis</th><th>Wykonanie</th></tr>
                    </thead>
                    <tbody>{this.todoTableRows()}</tbody>
                  </table>
                </div>
            </div>
        )
    }
}
