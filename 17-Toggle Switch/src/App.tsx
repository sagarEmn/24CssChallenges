import "./App.css";

function App() {
  return (
    <>
      <div className="toggle-wrap">
        <label htmlFor="toggle" className="toggle-label">
          <input type="checkbox" id="toggle" className="toggle-input"></input>
          <div className="toggle-switch"></div>
        </label>
      </div>
    </>
  );
}

export default App;
