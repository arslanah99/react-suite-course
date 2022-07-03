import logo from './logo.svg';
import './App.css';
import {Button, ButtonGroup, ButtonToolbar, CustomProvider, IconButton} from "rsuite"
// import default style
import 'rsuite/dist/rsuite.min.css'
import {Visible, Unvisible} from '@rsuite/icons';
import { useEffect, useState } from 'react';

function App() {
  const [toggleMode, setToggleMode] = useState(localStorage.getItem("toggle-mode") === 'true')
  useEffect(() => {
    localStorage.setItem("toggle-mode", toggleMode)
  }, [toggleMode])
  const toggleModeFunc = () => {
    setToggleMode(!toggleMode)
  }
  return (
    <CustomProvider theme={toggleMode ? "dark" : "light"}>
    <div className="App">
    <ButtonToolbar>
      <IconButton onClick={toggleModeFunc} color="red" appearance='ghost' size="lg" icon={toggleMode ? <Visible /> : <Unvisible />} />
    
    </ButtonToolbar>
    </div>
    </CustomProvider>
  );
}

export default App;
