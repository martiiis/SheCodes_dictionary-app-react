/** @format */

import "./App.css";

import "bootstrap/dist/css/bootstrap.css";

import Footer from "./Footer.js";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container-header">
        <h1 id="top-page">📚 Dictionary</h1>
      </div>
      <div className="container-dictionary">
        <Dictionary />
      </div>
      <Footer />
    </div>
  );
}
