import React, { useState } from 'react'
import PropTypes from 'prop-types';
export default function Textarea(props) {
    const handelUpClick = () => {
        console.log("button was clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handelLowClick = () => {
        console.log("button was clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
            <div style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}>
                <h1>Enter Text to be analysed</h1>
                <div className="form-group">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} id="exampleFormControlTextarea1" rows="12"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handelUpClick}>Convert to Upper case</button>
                <button className="btn btn-primary mx-3" onClick={handelLowClick}>Convert to Lower case</button>


            </div>
            <div className="container my-3" >
                <h1>Your Text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>
                    preview
                </h2>
                <p>
                    {text}
                </p>
            </div>
        </>
    )
}
