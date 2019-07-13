import React from 'react';

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Game from "./components/Game/Game";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Game />
    </React.Fragment>
  );
}

export default App;
