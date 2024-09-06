import "./App.css";

function App() {
  return (
    <>
      <ul className="stories-menu">
        <li className="story new">
          <div className="img-wrapper">
            <img className="img" src="momo1.jpeg" alt="" />
          </div>
          <p>Julian</p>
        </li>
        <li className="story viewed live">
          <div className="img-wrapper">
            <img className="img" src="momo2.jpg" alt="" />
          </div>
          <p>Julian</p>
        </li>
        <li className="story new">
          <div className="img-wrapper">
            <img className="img" src="momo3.jpg" alt="" />
          </div>
          <p>Julian</p>
        </li>
      </ul>
    </>
  );
}

export default App;
