import React, {useState} from 'react';

export default function TextForm(props) {

  const handleUpclick = ()=>{
    console.log('UpperCase was clicked');
    let newtext=text.toUpperCase();
    setText(newtext);
  }
  const handleLoclick = ()=>{
    console.log('LowerCase was clicked');
    let newtext=text.toLowerCase();
    setText(newtext);
  }
  const handleclear = ()=>{
    let newtext='';
    setText(newtext);
  }
  const handleOnchange= (event)=>{ // event could be rename to hua_hua
    console.log('ON Change');
    setText(event.target.value); // Now client is able to edti text in input box
    // current text + input 
  }

  const handlecopy= ()=>{ 
    console.log('Text Copied');
    var text= document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value); 
  }

  const handleExtraspace= ()=>{
    let newtext = text.split(/[  ]+/);
    // '/[  ]+/' ->  refers to one or more whitespaces
    setText(newtext.join(" "));
  }

  const [text, setText] = useState("Enter Text here");
  // wrong way to update 'text'
  // text="new Text";
  // correct way to update 'text'
  // setText("new Text");  //some error
  return (
    <>
    <div className="container">
        <h1>{props.heading} -  </h1>
        <div className="mb-3">
            <textarea className="form-control" value ={text} onChange={handleOnchange}id="myBox" row="8"/>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleclear}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraspace}>Remove Extra Space</button>



    </div>

    <div className="continer my-3">  
      {/* my-3 -> margin */}
      <h1>Your Text Summary</h1>
      <p> {text.split(" ").length} words, {text.length} characters</p>
      {/* text.split(" ") will gives an array of words split accross whitespaces */}
      <p> {0.008*text.split(" ").length} Minutes to read</p> 
      {/* 0.008 -> acc to google(slow reading)*/}
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
