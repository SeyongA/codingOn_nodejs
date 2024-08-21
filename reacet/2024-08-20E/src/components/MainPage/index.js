import './MainPage.css';

const MainPage = (props) => {
  return (
    <>
      <main>
        <div id="Bar">
          {props.type.map((x, i) => (
            <div className="BarDiv" key={i}>
              <img className="BarImg" src={x.src} alt={x.name} />
              <p className="itemName">{x.name}</p>
              <p className="itemPrice">{x.price}</p>
              <div className="tags">
                {x.hash?.map((a, b) => (
                  <span className="tag" key={b}>
                    {a.tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default MainPage;
