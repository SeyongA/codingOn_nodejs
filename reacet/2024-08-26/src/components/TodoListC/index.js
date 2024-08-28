const TodoListC = ({ data, setData }) => {
  const importFunc = () => {
    setData((prevData) => prevData.map((item) =>
      item.id === data.id ? { ...item, isImportant: !item.isImportant } : item
    ));
  };

  const deleteFunc = () => {
    setData((prevData) => prevData.map((item) =>
      item.id === data.id ? { ...item, isDeleted: true } : item
    ));
  };

  if (data.isDeleted) return null;

  return (
    <div> 
      {data.text}
      <button onClick={importFunc}>{data.isImportant ? "취소" : "중요"}</button>
      <button onClick={deleteFunc}>삭제</button>
    </div>
  );
};

export default TodoListC;
