const PropsTest = (props) => {
  console.log(props.Images);
  return (
    <>
      <main>
        <div className="mainDiv">
          <img id="mainImg" src={props.src} />
          <div id="sideBar">
            {props.Images.map((image, index) => (
              <img
                id="sideImg"
                key={index}
                onClick={() => {
                  props.setSrc(image);
                }}
                src={image}
              />
            ))}
          </div>
        </div>

        <div id="buttomDiv">
          <button className="a" onClick={props.Count}>
            +
          </button>
          <div id="p" className="a">
            {props.number}개
          </div>
          <button id="aa" className="a" onClick={props.Countm}>
            -
          </button>

          <div id="price">price : {props.price * props.number}</div>
        </div>
      </main>
    </>
  );
};

export default PropsTest;
