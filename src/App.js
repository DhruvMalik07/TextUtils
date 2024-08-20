import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
// import About from './Components/About.js';
import TextForm from './Components/TextForm.js';
import Alert from './Components/Alert.js';
import React,{ useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes, // Switch was changed to Routes in version 6
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  // code in return is 90-95% HTML (JSX) 
  // few ex. are calss -> className ,
  // return in JSX must return only one element ->  <>.....</>
  
  const [mode, setmode] = useState('light');
  const [alert,setalert] = useState(null);

  const showalert = (message ,type) =>{
    setalert({
      msg: message,
      type: type
    })
    // We want alert function to disappear after 2 sec/ 2000ms
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const togglemode = () =>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
      showalert("Dark Mode has been enabled", "success");
      // calling showalert function which will envetually update values of alert element
      
      // flickering Title -> to attract user attention
    //   setInterval(() => {
    //       document.title='Install TextUtils App';
    //   }, 2000);

    //   setInterval(() => {
    //     document.title='Rate it Now';
    // }, 1500);

    }
    else 
    {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode has been enabled", "success");
    }
  }
  
  return (
    <>
    {/* <Router> */}
    <Navbar title ="TextUtils" aboutText="About TextUtils" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert} /> 
    <div className="container"> 
    {/* proper alignment and spacing for input area */}

        {/* commented in vid 17 */}
        {/* <Routes>
            <Route exact path="/about" element={<About />} /> 
            <Route exact path="/" element={<TextForm showalert={showalert} heading="Enter text to analyze" mode={mode} />} />
        </Routes> */}
        <TextForm showalert={showalert} heading="Enter text to analyze" mode={mode} />
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
