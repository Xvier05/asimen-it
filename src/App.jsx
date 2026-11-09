
import React from "react";
import "./App.css";

// Import the GIF from your local assets folder
import catGif from "./assets/cat-cats.gif";

function App() {
  return (
    <main className="app-container">

      <section className="welcome-card">

        <div className="gif-container">
          <img
            src={catGif}
            alt="Cute animated cat holding flowers"
            className="cat-gif"
          />
        </div>

        <h1>Hello, Welcome!</h1>

        <p className="description">
          A little corner of happiness on the internet.
        </p>

        <p className="subtitle">
          Sending you some virtual flowers and smiles!
        </p>

        <div className="heart">♡</div>

      </section>

      <footer>
        Made with love ♡
      </footer>

    </main>
  );
}

export default App;
