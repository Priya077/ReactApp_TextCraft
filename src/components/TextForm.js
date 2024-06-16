import React, { useState } from 'react';
import Axios from 'axios';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [searchWord, setSearchWord] = useState("");
    const [result, setResult] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value);
        setSearchWord(event.target.value);
        setResult(event.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        setResult(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        setResult(newText);
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
            const response = await Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`);
            if (response.data && response.data[0]) {
                const meaning = response.data[0].meanings?.[0]?.definitions?.[0]?.definition;
                if (meaning) {
                    setSearchWord(meaning);
                    setResult(meaning);
                } else {
                    setSearchWord("Definition not found.");
                    setResult("Definition not found.");
                }
            } else {
                setSearchWord("Definition not found.");
                setResult("Definition not found.");
            }
        } catch (error) {
            console.error("Error fetching the meaning:", error);
            setSearchWord("Error fetching the meaning.");
            setResult("Error fetching the meaning.");

        }
    }

    return (
        <>
            <div className="container my-3">
                <div className="mb-3">
                    <h2>{props.heading}</h2>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="10"
                        value={result}
                        onChange={handleOnChange}
                        placeholder="Enter your text here...">
                    </textarea>
                </div>
                <button type="button" className="btn btn-outline-primary mx-3" onClick={handleUpClick}>
                    Convert To Upper Case
                </button>
                <button type="button" className="btn btn-outline-primary mx-3" onClick={handleLowClick}>
                    Convert To Lower Case
                </button>
                <button type="button" className="btn btn-outline-primary mx-3" onClick={handleMeaning}>
                    Search Meaning
                </button>
            </div>
            <div className="container my-5">
                <h3>Text Summary: </h3>
                <p>No of Words: {countLength()}<br />
                    No of characters: {text.length}
                </p>
                <h3>Preview</h3>
                <p>Your text is: {result}</p>
            </div>
        </>
    )
}
