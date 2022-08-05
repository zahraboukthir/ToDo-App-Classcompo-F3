import React, { Component } from "react";
import AddTask from "./Components/AddTask";
import ListTas from "./Components/ListTas";
import "./App.css";
export class App extends Component {
  state = {
    list: [
      {
        title: "Html",
        isDone: true,
        id: Math.random(),
      },
      {
        title: "Css",
        isDone: true,
        id: Math.random(),
      },
      {
        title: "JS",
        isDone: true,
        id: Math.random(),
      },
      {
        title: "React",
        isDone: false,
        id: Math.random(),
      },
      {
        title: "NodeJS",
        isDone: false,
        id: Math.random(),
      },
    ],
  };
  hundleAdd = (newTask) => {
    this.setState({
      list: [...this.state.list, newTask],
    });
  };
  hundleDel = (iddeleted) => {
    this.setState({
      list: this.state.list.filter((todo) => todo.id != iddeleted),
    });
  };
  hundleDone = (idtask) => {
    this.setState({
      list: this.state.list.map((todo) =>
        todo.id == idtask ? { ...todo, isDone: !todo.isDone } : todo
      ),
    });
  };
  hundleEdit = (newtitle, idedited) => {
    this.setState({
      list: this.state.list.map((todo) =>
        todo.id == idedited ? { ...todo, title: newtitle } : todo
      ),
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <AddTask hundleAdd={this.hundleAdd} />
        <ListTas
          list={this.state.list}
          hundleDel={this.hundleDel}
          hundleDone={this.hundleDone}
          hundleEdit={this.hundleEdit}
        />
      </div>
    );
  }
}

export default App;
