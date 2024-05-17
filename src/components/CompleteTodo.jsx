export const CompleteTodo = ({ completeTodos, onClickBack }) => {
  return (
    <div className="complete-area">
      <p>完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => (
          <li key={todo.id}>
            <div className="list-row">
              <p className="todo-item">{todo.text}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
