import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import About from './Components/About.js';
import TextForm from './Components/TextForm.js';

function App() {
  // code in return is 90-95% HTML (JSX) 
  // few ex. are calss -> className ,
  // return in JSX must return only one element ->  <>.....</>
  return (
    <>
    <Navbar title ="TextUtils" aboutText="About TextUtils"/>
    <div className="container"> 
    {/* proper alignment and spacing for input area */}
    <TextForm heading="Enter text to analyze"/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
