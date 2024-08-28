import { Button, Input } from 'antd';
import { useState } from 'react';
import TodoListC from '../TodoListC';

const TodoList = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [num, setNum] = useState(0);

  const submitFunc = (event) => {
    event.preventDefault();
    const newNum = num + 1;
    setData((prevData) => [...prevData, { id: newNum, text: input, isImportant: true, isDeleted: false }]);
    setNum(newNum);
    setInput('');
  };

  const activeItems = data.filter(item => !item.isDeleted);
  const deletedItems = data.filter(item => item.isDeleted);

  return (
    <main>
      <h1>TodoList</h1>
      <form onSubmit={submitFunc}>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button htmlType="submit">등록</Button>
      </form>
      <div>
        <h2>할 일 목록</h2>
        {activeItems.map((item) => (
          <TodoListC key={item.id} data={item} setData={setData} />
        ))}
      </div>
      <div>
        <h2>휴지통</h2>
        {deletedItems.length === 0 ? (
          <p>휴지통이 비어있습니다.</p>
        ) : (
          deletedItems.map((item) => (
            <div key={item.id}>
              <p>{item.text}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default TodoList;
