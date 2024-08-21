function App() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <p>(함수형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
      <input ref={inputRef} />
      <button onClick={handleFocus}>버튼</button>
    </>
  );
}

export default App;
