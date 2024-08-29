import React, { useState } from "react";

export default function Textform(props) {
//   const [myStyle,setMyStyle] = useState({
//     color: 'black',
//     backgroundColor: 'white',
// });
  const [text, setText] = useState("");
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert('success','Text converted to UpperCase.!')
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert('success','Text converted to LowerCase.!')
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearText = () => {
    let blankText = ""; 
    setText(blankText);
    props.showAlert('warning','All the text viped up from TextArea.!');
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('success','Extra spaces are removed.!')
  }
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('success','Your text is copied.!')
  }
  let wordCount = text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length;
  return (
    <>
      <div className="container my-3 " style={props.myStyle}>
        <h1>{props.heading}</h1>
        <div className="mb-3" style={props.myStyle}>
          <textarea
            rows="10" 
            value={text}
            placeholder="Enter text here"
            onChange={handleOnChange}
            className="form-control"
            id="mybox"
            style={props.myStyle}
          ></textarea>
        </div>
        <div className="flex flex-auto" style={props.myStyle}>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>
          LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>
          Copy
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>
          Clear
        </button>
        </div>
        <div className="container" style={props.myStyle}>
        <h1>Your text summary</h1>
        <p>
          {wordCount} <b>Words</b>, and {text.length} <b>Characters</b>
        </p>
        <p>
          {0.008 * wordCount} <b>Minutes</b> to read
        </p>
        </div>
        <div className="container" style={props.myStyle}>
        <h2>Preview</h2>
        <p className="border p-2">{text.length>0?text:'Nothing to preview'}</p>
        </div>
      </div>
    </>
  );
}
