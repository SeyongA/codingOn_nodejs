import { Button } from "antd";
import { useState } from "react";

const PMCount = (props) => {
  const [count, setCount] = useState(0);
  const btnClickP = () => {
    setCount(count + 1);
  };
  const btnClickM = () => {
    setCount(count - 1);
  };
  return (
    <>
      <Button onClick={btnClickP}> + </Button>
      <Button onClick={btnClickM}> - </Button>
      <p>{count}</p>
    </>
  );
};
export default PMCount;
