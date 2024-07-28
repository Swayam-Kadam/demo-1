import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React,{useState} from 'react';

/* import {  //when we use react router then must import this three elements
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";  */

function App() {

  const [mode,setmode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    },1500);
  }

const  toggelMode = ()=>{
  if(mode==='light'){
    setmode('dark')
    document.body.style.backgroundColor = '#09082f';
    document.body.style.color = 'white';
    showAlert("dark mode has been enabled","success");
    document.title ='TextUtils -Dark Mode'; //this is use to change title Dynamically
    
   /* setInterval(() => {
      document.title = 'TextUtils is amazing Mode';
    }, 2000);

    setInterval(() => {
      document.title = 'Install TextUtils Now';
    }, 1500);*/  //it is use to continueosly change our web title for attract user this is use for promote,notification..
  }else{
    setmode('light')
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    showAlert("light mode has been enabled","success");
    document.title ='TextUtils -Light Mode';
  }
}
  return (
    <>
    {/* <Router> */}
<Navbar title="TextUtil2" about="about us" mode={mode} toggelMode={toggelMode} />
<Alert alert={alert}/>
<div className="container">
  {/* <Routes>  */}
           {/* <Route exact path="/about us" element={<About mode={mode}/>}>  */}
           <TextForm heading="Enter the Text  to Analyze below"  showAlert={showAlert} mode={mode}/>   <hr Style={`color:${mode==='dark'?'white':'red'}`}/>  
           {/* </Route>  */}
           {/* <Route exact path="/" element={<TextForm heading="Enter the Text  to Analyze below"  showAlert={showAlert} mode={mode}/>}>  */}
           <About mode={mode}/>
            {/* </Route>  */}
  {/* </Routes>   */}
   {/* <hr Style={`color:${mode==='dark'?'white':'red'}`}/>  */}
        </div>
 {/* </Router>  */}
    </>
  );
}

export default App;
