import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      showAlert('success', 'Dark Mode enabled');
    } else {
      setMode('light');
      showAlert('success', 'Light Mode enabled');
    }
  }
  if (mode === 'light') {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = '#0a0c2b';
  } else {
    document.body.style.backgroundColor = '#0a0c2b';
    document.body.style.color = 'white';

  }
  return (
    <div>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/">
            <Textform showAlert={showAlert} mode={mode} heading="TextUtility - Uppercase | Lowercase | Word counter etc." />
          </Route>
          <Route exact path='/about'>
            <About mode={mode} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
