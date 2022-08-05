import React, { Component } from "react";

export class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedtask: "",
      show: false,
      title: "",
    };
    console.log(props);
  }

  render() {
    return (
      <div>
        <span className={this.props.todo.isDone ? "Done" : null}>
          {this.props.todo.title}
        </span>
        <button onClick={() => this.props.hundleDel(this.props.todo.id)}>
          X
        </button>
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Edit
        </button>
        <div className={this.state.show ? "editedtask" : "noneditedtask"}>
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => this.setState({ title: e.target.value })}
            value={this.state.title}
          />
          <button onClick={()=>{this.props.hundleEdit(this.state.title,this.props.todo.id)
        this.setState({ show: !this.state.show })
        this.setState({ title: "" })}
        }>save</button>
        </div>
        <button onClick={() => this.props.hundleDone(this.props.todo.id)}>
          {this.props.todo.isDone ? "Done" : "UnDone"}
        </button>
      </div>
    );
  }
}

export default Task;
