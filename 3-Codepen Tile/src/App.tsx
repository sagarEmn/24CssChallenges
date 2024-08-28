import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <div className="card-thumbnail">
          <img alt="eminem award picture" src="/eminem-picture.jpg" />
        </div>
        <div className="card-body">
          <div className="card-firstrow">
            <div className="card-avatar">
              <img alt="" src="/eminem-picture.jpg" />
            </div>
            <div className="card-details">
              <h3>Eminem | Slim Shady</h3>
              <p>RAP GOD</p>
            </div>
          </div>
          <div className="card-stats">
            <ul>
              <li>💖 51 Years Old</li>
              <li>💖 8 Mile Nordic Track</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
``;
