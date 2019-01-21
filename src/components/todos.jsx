import React from "react";
import Proptypes from "prop-types";

export default class Todos extends React.Component {
  componentDidMount() {
    this.props.get_todos();
  }
  handleOk = () => {
    let inputVal = this.input.value;
    if (inputVal === "" || inputVal.trim() === "") {
      this.input.value = "";
      return;
    }
    this.props.addTodo(inputVal);
    this.input.value = "";
  };
  handleAsyncOk = () => {
    let inputVal = this.input.value;
    if (inputVal === "" || inputVal.trim() === "") {
      this.input.value = "";
      return;
    }
    this.props.addAsyncTodo(inputVal);
    this.input.value = "";
  };
  render() {
    const { todos } = this.props;
    return (
      <div>
        <input
          placeholder="please input your todo"
          ref={input => (this.input = input)}
        />
        <button onClick={this.handleOk}>OK</button>
        <button onClick={this.handleAsyncOk}>AsyncOK</button>
        <ul>
          {todos
            ? todos.map((v, k) => {
                return <li key={k}>{v}</li>;
              })
            : ""}
        </ul>
      </div>
    );
  }
}

Todos.prototypes = {
  todos: Proptypes.array.isRequired,
  addTodo: Proptypes.func.isRequired,
  addAsyncTodo: Proptypes.func.isRequired,
  get_todos: Proptypes.func.isRequired
};
