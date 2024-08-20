import React, {useState} from 'react';

export default function TextForm(props) {

  const handleUpclick = ()=>{
    console.log('UpperCase was clicked');
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to Lowercase","success");
  }
  const handleLoclick = ()=>{
    console.log('LowerCase was clicked');
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showalert("Converted to Uppercase","success");
  }
  const handleclear = ()=>{
    let newtext='';
    setText(newtext);
    props.showalert("Text Cleared","success");
  }
  const handleOnchange= (event)=>{ // event could be rename to hua_hua
    console.log('ON Change');
    setText(event.target.value); // Now client is able to edit text in input box
    // current text + input 
  }

  const handlecopy= ()=>{ 
    console.log('Text Copied');
    var text= document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value); 
    props.showalert("Text Copied","success");
  }

  const handleExtraspace= ()=>{
    let newtext = text.split(/[  ]+/);
    // '/[  ]+/' ->  refers to one or more whitespaces
    setText(newtext.join(" "));
    props.showalert("Extra Whitespaces have been removed","success");
  }

  const [text, setText] = useState("");
  // wrong way to update 'text'
  // text="new Text";
  // correct way to update 'text'
  // setText("new Text");  //some error
  return (
    <>
    <div className="container" style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading} -  </h1>
        <div className="mb-3">
            <textarea className="form-control" value ={text} style={{backgroundColor : props.mode==='dark'?'grey':'white'}} onChange={handleOnchange} id="myBox" rows="8"/>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleclear}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraspace}>Remove Extra Space</button>



    </div>

    <div className="continer my-3" style={{color : props.mode==='dark'?'white':'#042743'}}>  
      {/* my-3 -> margin */}
      <h1>Your Text Summary</h1>
      <p> {text.split(" ").length} words, {text.length} characters</p>
      {/* text.split(" ") will gives an array of words split accross whitespaces */}
      <p> {0.008*text.split(" ").length} Minutes to read</p> 
      {/* 0.008 -> acc to google(slow reading)*/}
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter your Something to preview"}</p>
    </div>
    </>
  )
}
