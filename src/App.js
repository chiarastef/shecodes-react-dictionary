import Dictionary from "./components/Dictionary";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>What word do you want to look up?</h1>
        <Dictionary />
        <footer>
          <a href="https://github.com/chiarastef/shecodes-react-dictionary">
            Open-source code
          </a>{" "}
          by Chiara Stefanelli
        </footer>
      </div>
    </div>
  );
}

export default App;
