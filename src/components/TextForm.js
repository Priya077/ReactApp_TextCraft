import React, { useState } from 'react';
import Axios from 'axios';

export default function TextForm(props) {
    const [text, setText] = useState("");
    //const [searchWord, setSearchWord] = useState("");
    //const [result, setResult] = useState("");


    const handleOnChange = (event) => {
        setText(event.target.value);
        
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        
    }

    const handleClear = () => {
        setText("");

    }

    const handleCopy = () => {
        var newText = document.getElementById("myText");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const countLength = () => {
        const arr = text.trim().split(' ');
        const len = arr.length;
        if (arr[len - 1] === "")
            return len - 1;
        else
            return len;
    }

    const handleMeaning = async () => {
        try {
            const response = await Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
            if (response.data && response.data[0]) {
                const meaning = response.data[0].meanings?.[0]?.definitions?.[0]?.definition;
                if (meaning) {
                    setText(meaning);
                    
                } else {
                    setText("Definition not found.");
                    
                }
            } else {
                setText("Definition not found.");
               
            }
        } catch (error) {
            console.error("Error fetching the meaning:", error);
            setText("Error fetching the meaning.");
            

        }
    }

    return (
        <>
            <div className="container my-4" style={{
                color: props.mode === 'light' ? 'black' : 'white'
            }}>
                <div className="mb-3" >
                    <h2>{props.heading}</h2>
                    <textarea
                        className="form-control my-4" style={{
                            backgroundColor: props.mode === 'light' ? 'white' : 'grey',
                            color: props.mode === 'light' ? 'black' : 'white'
                        }}
                        id="myText"
                        rows="10"
                        value={text}
                        onChange={handleOnChange}
                        placeholder="Enter your text here...">
                    </textarea>
                </div>
                
                <button type="button" className="btn btn-outline-primary mx-3" onClick={handleUpClick} >
                    Convert To Upper Case
                </button>
                <button type="button" className="btn btn-outline-primary mx-3" onClick={handleLowClick}>
                    Convert To Lower Case
                </button>
                <button type="button" className="btn btn-outline-primary mx-3" onClick={handleMeaning}>
                    Search Meaning
                </button>
                <button type="button" className="btn btn-outline-primary mx-3" onClick={handleCopy}>
                    Copy Text
                </button>
                <button type="button" className="btn btn-outline-primary mx-3" onClick={handleClear}>
                    Clear
                </button>
            </div>
            <div className="container my-5" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3>Text Summary: </h3><br/>
                    <p>No of Words: {countLength()}<br />
                    No of characters: {text.length}
                    </p>
                <h3>Preview</h3>
                    <p>{text}</p>
            </div>
        </>
    )
}
