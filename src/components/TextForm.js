import React, {useState}from 'react' //here useState is state  function

export default function TextForm(props){
    const handleUpClick = ()=>{
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("Converted To Uppercase","success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lowercase","success");
     }

     const handleClear = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Clear All Text!!","success");
     }

     const handelcopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy All Text","success");
     }

     const handelExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);  //it is rejex consept in javascript
        setText(newText.join(" "))
        props.showAlert("Clear Extra Spaces!!","success");
     }

     const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
      const stop = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.cancel();
      }

    const handleOnChange = (event)=>{ //function hold event and this function set a text in textarea which we write into textBox 
        setText(event.target.value); //1) parameter is event 2)parameter is target where we write 3)parameter is value which we write
    }
    const [text,setText] = useState('Enter text here') //here first parameter 'text' hold default text which write in paranthises and second parameter setText is a (update)function use to change a text
   //text = "hello"; //it is wronge way to change text in react
   //setText("hello swayam"); //it is right way to change text in react
    return(
    <>
    <div className="container">   
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" Style={`background-color:${props.mode==='dark'?'grey':'white'}`} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea> 
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} id="myBox">Convert To UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} id="myBox">Convert To LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear} id="myBox">Clear All</button>
        <button className="btn btn-primary mx-2" onClick={handelcopy} id="myBox">Copy All</button>
        <button className="btn btn-primary mx-2" onClick={handelExtraSpace} id="myBox">Remove Extra Space</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        <button type="submit" onClick={stop} className="btn btn-warning mx-2 my-2">Stop</button>


    </div>

    <div className="container my-3">
        <h2>Your text summery</h2>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(" ").length}</b> Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
    )
}