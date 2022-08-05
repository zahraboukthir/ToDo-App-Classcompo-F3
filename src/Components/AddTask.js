import React, { Component } from "react";

export class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskTitle: "",
    };
    console.log(props);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) =>
            this.setState({
              taskTitle: e.target.value,
            })
          }
          value={this.state.taskTitle}
        />
        <button
          onClick={()=>{this.props.hundleAdd({
            title: this.state.taskTitle,
            isDone: false,id:Math.random()
          })
        this.setState({taskTitle:""})
        }}
        >
          Add task
        </button>
      </div>
    );
  }
}

export default AddTask;
