import React,{useState} from 'react'
//rfc
export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("upper case was clicked" + text )
        let newText = text.toUpperCase();
        setText(newText) 
    }

    const handleOnClick = () => {
        console.log("upper case was clicked" + text )
        let newText = text.toLowerCase();
        setText(newText) 
    }

   

    const handleOClick = () => {
        console.log("upper case was clicked" + text )
        let newText = text.size() + 3;
        setText(newText) 
    }

    const handleOtClick = () => {
       // console.log("upper case was clicked" + text )
        let newText = '';
        setText(newText) 
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
   



    const [text,setText] = useState('Enter Text');
    
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert text to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleOnClick}>Convert text to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleOClick}>increase text size</button>
        <button className="btn btn-primary mx-2" onClick={handleOtClick}>clear text</button>

        


    </div>
    <div className = "container my-2">
       <h1>your text Summary</h1>
       <p>{text.split(" ").length} words and {text.length}characters</p>
       <p>{0.008 * text.split(" ").length} words per minutes</p>
       <h2>preview</h2>
      <p> {text}</p>
    </div>


</>
  )
}


