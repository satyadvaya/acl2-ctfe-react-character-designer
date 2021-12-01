import "./App.css";
import Character from "./components/Character/Character";
import Display from "./components/Display/Display";
import Picker from "./components/Picker/Picker";
import { useState } from "react";

function App() {
  const [head, setHead] = useState("");

  return (
    <div className="App">
      <main>
        <header className="App-header">
          <h1>Frankenstein Laboratory</h1>
          <Picker head={head} onHeadChange={setHead} />
          <Display />
          <Character />
        </header>
      </main>
    </div>
  );
}

export default App;
