import React, { Component } from "react";
import { Task } from "./Task";

export class ListTas extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }
  render() {
    return (
      <div>
        {this.props.list.map((todo, i) => (
          <Task
            todo={todo}
            key={i}
            hundleDel={this.props.hundleDel}
            hundleDone={this.props.hundleDone}
            hundleEdit={this.props.hundleEdit}
          />
        ))}
      </div>
    );
  }
}

export default ListTas;
