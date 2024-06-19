import Navbar from './components/Navbar'
import Alert from './components/Alert'
import './App.css';
import React, { useState } from 'react'
import  AppRoute  from './AppRoute.js'



function App() {
    const [mode, setMode] = useState('light'); //mode state
    const [alert, setAlert] = useState(null); //alert state

    //function to set Alert message and type
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
    }
    // after 1.5 s alert message will be disappeared
    setTimeout(() =>
        setAlert(null), 1500);

    const toggleButton = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#052b52';
            showAlert('Dark mode has been enabled', 'success');
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert('Light mode has been enabled', 'success');
        }
    }

    return (
      <>
            <Navbar title="TextCraft" mode={mode} toggleBtn={toggleButton}></Navbar>
            <Alert alert={alert} />
            <AppRoute mode={mode} showAlert={showAlert} />
      </>
  );
}

export default App;
