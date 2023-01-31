import React from "react";
import Button from "remote1/button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Host app</h1>
      <p>Loading button from remote</p>
      <Button>Welcome</Button>
    </div>
  );
}

export default App;
