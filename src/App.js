// Imports
import React, { useState } from 'react';
import Estatus from "./components/Estatus";
import Posteos from './components/Posteos';

// Component App
function App() {
  // useState
  const [totalLikes, setTotalLikes] = useState(0);

  // Methods
  const aumentarLikes = () => {
    setTotalLikes(totalLikes + 1)
  }

  return (
    <div className="App">
      <Estatus likes={totalLikes}/>
      <Posteos aumentar={aumentarLikes}/>
    </div>
  );
}

export default App;
