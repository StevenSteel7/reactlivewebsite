import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TexArea from './Components/TexArea';
import React, { useState } from 'react';
import Alert from './Components/Alert';






function App() {
const[mode,setMode] = useState('light');
const[alert,setAlert] = useState(null); // its initially null

const showAlert = (message, type) =>{
  setAlert({ 
  msg : message, // create an object msg
  tipe : type
          })
  setTimeout(() =>{
    setAlert(null);
  },1500) // 1.5 sec
} 

const toggleMode = () => {
if(mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor = '#303443';
  showAlert("Dark mode has been enabled", "success");
}
else {setMode('light');
document.body.style.backgroundColor = 'white'
showAlert("Light mode has been enabled", "success");}
}


  return (
<>

{/* Now this toggle mode function will run if we click on switch.. So we go to switch */}



    <Navbar title="TextUtils" about="About TextUtils" mode = {mode} toggleMode = {toggleMode}/> {/* using props */}
      <Alert alert ={alert}/> 
        <div className="container my -3">                 {/* To get space from y axis */}
       
          <TexArea shooAlert = {showAlert} heading="Enter text here👇"mode = {mode} />
    
    
       
   

        {/* We also need to tell text Area that what is mode */}

      </div>


</>
  );




}

export default App;


