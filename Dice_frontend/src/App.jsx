import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./components/Sigin";
import Signup from "./components/signup";
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {setIsGameStarted((prev) => !prev);};
  return (

    <>
      <Router>
    
      <Routes>
        <Route path='/signin' element={<Signin />} />
        <Route path='/' element={<Signup />} />
        <Route path='/Homepage' element={isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />} />
        </Routes>
      </Router>
      </>
  );
}

export default App;
