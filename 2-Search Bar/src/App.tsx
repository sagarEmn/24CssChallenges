import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <label htmlFor="search-field" className="hide">Search</label>
        <input
          type="search"
          className="search-bar"
          id="search-field"
          placeholder="Search..."
        />
      </div>
    </>
  );
}

export default App;
