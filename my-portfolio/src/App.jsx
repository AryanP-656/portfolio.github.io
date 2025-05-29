// src/App.jsx
import React from "react";
import Layout from "./components/Layout";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Background shapes for visual interest */}
      <div className="bg-shape bg-shape-1"></div>
      <div className="bg-shape bg-shape-2"></div>
      <div className="bg-shape bg-shape-3"></div>

      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
