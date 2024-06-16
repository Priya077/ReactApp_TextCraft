import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import './App.css';
import React, {useState } from 'react'
<script>
    let conf = confirm("Are you sure you want to delete?");
</script>


function App() {
    const [mode, setMode] = useState('light');

    const toggleButton = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#052b52';
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    }

    return (
      <>
            <Navbar title="TextUtility" mode={mode} toggleBtn={toggleButton }></Navbar>
            <TextForm heading="Convert to UpperCase" mode={mode}></TextForm>
      </>
  );
}

export default App;
