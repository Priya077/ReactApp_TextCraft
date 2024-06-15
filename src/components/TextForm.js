import React from 'react'
import {useState } from 'react'
export default function TextForm(props) {
    const [text, setText] = useState("Enter your text here...") //using state

    const handleOnChange = (event) => {
          setText(event.target.value)
    }

    const handleOnClick = () => {
        //setText("You have clicked the convert button.");
        let newText = text.toUpperCase();
        setText(newText);
    }
    return (
        <div className="container">
            <div className="mb-3">
                <h2>{props.heading}</h2>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button type="button" class="btn btn-outline-primary" onClick={handleOnClick}>Convert</button>
        </div>
    )
}