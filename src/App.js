import Dictionary from "./components/Dictionary";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary default="Sunset" />
        <footer>
          <a
            href="https://github.com/chiarastef/shecodes-react-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Chiara Stefanelli
        </footer>
      </div>
    </div>
  );
}

export default App;
