import "./App.css";
import Character from "./components/Character/Character";
import Display from "./components/Display/Display";
import Picker from "./components/Picker/Picker";
import React, { useState } from "react";

function App() {
  const [head, setHead] = useState("");
  const [middle, setMiddle] = useState("");
  const [pants, setPants] = useState("");

  return (
    <div className="App">
      <main>
        <header className="App-header">
          <h1>Frankenstein Laboratory</h1>
          <Picker
            head={head}
            onHeadChange={setHead}
            middle={middle}
            onMiddleChange={setMiddle}
            pants={pants}
            onPantsChange={setPants}
          />
          <Display />
          <Character head={head} middle={middle} pants={pants} />
        </header>
      </main>
    </div>
  );
}

export default App;
