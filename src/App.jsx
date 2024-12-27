import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="col col-1">
          <div className="row-1 row">
            <p>Widget 1</p>
          </div>
          <div className="row row-2">
            <p>Widget 4</p>
          </div>
        </div>
        <div className="col col-2">
          <div className="row-3 row">
            <p>Widget 2</p>
          </div>
          <div className="row row-4">
            <p>Widget 5</p>
          </div>
        </div>
        <div className="col col-3">
          <div className="row-5 row">
            <p>Widget 3</p>
          </div>
          <div className="row row-6">
            <p>Widget 6</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
