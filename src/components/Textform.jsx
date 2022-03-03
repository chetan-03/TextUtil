import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert('success', 'Converted to Uppercase');
    }
    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert('success', 'Converted to Lowercase');
    }
    const handleClearClick = () => {
        setText('');
        props.showAlert('success', 'Cleared');
    }
    const handleonClick = (e) => {
        setText(e.target.value);
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('success', 'Text copied to your clipboard');
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));

    }
    return (
        <div>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea style={
                        {
                            backgroundColor: props.mode === 'light' ? '#f8f9fa' : '#0b105ae3'
                        }
                    } className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'}`} placeholder="Enter text here" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleonClick}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra space</button>
            </div>
            <div className="container my-2">
                <h2>
                    Your Text Preview
                </h2>
                words : {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} <br />
                charecters : {text.length} <br />
                {"words/min "}: {0.08 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} <br />
                <h3>
                    Preview
                </h3>
                <p>
                    {text.length === 0 ? 'Nothing to preview!' : text}
                </p>
            </div>
        </div>
    )
}
