export const InputTodos = ({ todoText, onChange, onClick}) => {
  return (
    <div className="input-area">
      <input placeholder="todoを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
