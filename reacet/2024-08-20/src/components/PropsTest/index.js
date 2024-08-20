// import {Input} from 'antd'

const PropsTest = (props) => {
  /*
  const { fruit, fruits, setFruit, bk, bks, setBK, color, colors, setColor, content, setContent } = props;
  const handleChange1 = (e) => {
    setFruit(fruits[e.target.value]);
  };
  const handleChange2 = (e) => {
    setBK(bks[e.target.value]);
  };
  const handleChange3 = (e) => {
    setColor(colors[e.target.value]);
  };

  const changeContent = (e) => {
    setContent(e.target.value);
  };
  return (
    <>
      <div className="main" id="mainDiv" >
        <div>
          과일:
          <select onChange={handleChange1} value={Object.keys(fruits).find((key) => fruits[key] === fruit)}>
            {Object.entries(fruits).map(([key, { name }]) => (
              <option key={key} value={key}>
                {name}
              </option>
            ))}
          </select>
          배경색
          <select onChange={handleChange2} value={Object.keys(bks).find((key) => bks[key] === bk)}>
            {Object.entries(bks).map(([key, { name }]) => (
              <option key={key} value={key}>
                {name}
              </option>
            ))}
          </select>
          글자색
          <select onChange={handleChange3} value={Object.keys(colors).find((key) => colors[key] === color)}>
            {Object.entries(colors).map(([key, { name }]) => (
              <option key={key} value={key}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div>
          내용:
          <input type="text" value={content} onChange={changeContent} />
        </div>
        <div>
          <img style={{ width: 200, height: 200 }} src={fruit.src} alt={fruit.name} />
        </div>
        <div style={{ backgroundColor: bk.color, width: 200, height: 100 }}>
          <p style={{ color: color.color }}>{content}</p>
        </div>
      </div>
    </>
  );
  */
};

export default PropsTest;
