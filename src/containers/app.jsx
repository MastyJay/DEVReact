import React from "react";
import Todos from "../components/todos";
import { connect } from "react-redux";

import { addTodo, addAsyncTodo, get_todos } from "../redux/actions";

// export default App;
export default connect(
  state => ({ todos: state }),
  { addTodo, addAsyncTodo, get_todos }
)(Todos);
