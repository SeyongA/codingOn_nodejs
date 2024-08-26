import React, { useState, useRef } from 'react';
import { Button, Input } from 'antd';
import { useFormik } from 'formik';
import './style.css';

const TodoList = () => {
  const [data, setData] = useState([]);
  const inputRef = useRef(null); // Reference for the input element

  // Formik for form management
  const dataFormik = useFormik({
    initialValues: {
      content: '',
    },
    onSubmit: (values, { resetForm }) => {
      if (values.content === '') {
        inputRef.current.focus(); // Focus the input if submission was empty
      } else {
        setData([...data, { ...values, important: false }]);
        resetForm(); // Reset form after submission
      }
    },
  });

  // Toggle the 'important' status of a todo item
  const toggleImportant = (index) => {
    const newData = data.map((item, i) => {
      if (i === index) {
        return { ...item, important: !item.important }; // Toggle the 'important' property
      }
      return item;
    });
    setData(newData);
  };

  // Remove a todo item from the list
  const filterData = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h1>할 일<span>.</span></h1>
      <form onSubmit={dataFormik.handleSubmit}>
        <Input
          name="content"
          ref={inputRef}
          onChange={dataFormik.handleChange}
          value={dataFormik.values.content}
          placeholder="할 일을 입력하세요!"
        />
        <Button htmlType="submit">등록</Button>
      </form>
      <div className="todo-list">
        {data.map((x, i) => (
          <div key={i} style={{ backgroundColor: x.important ? 'red' : 'white', color: x.important ? 'white' : 'black' }}>
            {x.content}
            <div>
              <Button className="important-btn" onClick={() => toggleImportant(i)}>
                중요
              </Button>
              <Button className="delete-btn" onClick={() => filterData(i)}>
                삭제
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
