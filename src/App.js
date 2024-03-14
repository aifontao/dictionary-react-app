import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer>
        Coded by{" "}
        <a
          href="https://ana-fontao-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <strong>Ana Fontão</strong>
        </a>{" "}
        and open-sourced on{" "}
        <a href="https://github.com/aifontao/dictionary-react-app">
          <strong>Github</strong>
        </a>
      </footer>
    </div>
  );
}

export default App;
