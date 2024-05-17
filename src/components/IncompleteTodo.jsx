export const IncompleteTodo = ({
  incompleteTodos,
  onClickComplete,
  onClickDelete,
}) => {
  return (
    <div className="incomplete-area">
      <p>未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => (
          <li key={todo.id}>
            <div className="list-row">
              <p className="todo-item">{todo.text}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
