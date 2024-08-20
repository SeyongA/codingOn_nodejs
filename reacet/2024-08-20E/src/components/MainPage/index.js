import './MainPage.css';

const MainPage = (props) => {
  return (
    <>
      <main>
        <div id="Bar">
          {props.type.map((x, i) => (
            <div className="BarDiv" key={i}>
              <img className="BarImg" src={x.src} alt={x.name} />
              <p>{x.name}</p>
              <p>{x.price}</p>
              <p>
                {x.hash?.map((a, b) => (
                  <span key={b}>{a.tag} </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default MainPage;
