import { useState } from "react";
import "./style.css";
import { InputTodos } from "./components/InputTodos";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

// ユニークID生成関数
const generateId = () => "_" + Math.random() * Math.random();

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = { id: generateId(), text: todoText };
    setIncompleteTodos([...incompleteTodos, newTodo]);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newInCompleteTodos = [...incompleteTodos];
    const completedTodo = newInCompleteTodos.splice(index, 1)[0];
    setCompleteTodos([...completeTodos, completedTodo]);
    setIncompleteTodos(newInCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    const returnedTodo = newCompleteTodos.splice(index, 1)[0];
    setIncompleteTodos([...incompleteTodos, returnedTodo]);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <InputTodos
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
