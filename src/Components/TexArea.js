import React,{useState} from 'react' // useState a hook helps us give states


export default function TexArea(props) {

    
    const handleOnChange = (event) => 
    {//console.log('On Change');
    setText(event.target.value)
// when a change is made make an event where the 'value' is changed to the modified text
}

const handleUpClick = () =>{
   // console.log('UpperCaseWasClicked',text) //Therefore we are able to access text from set text
    let newText = text.toUpperCase();
    setText(newText);
    props.shooAlert("Converted to upperCase!" , "success");
}

const handleLowClick = () =>{
     let newText = text.toLowerCase();
     setText(newText);
}

const handleClear = () =>{
    let newText = '';
    setText(newText);
}

const handleNumExtract =()=>{
    const regex = /[0-9/ /]/g;

    const digits = text.match(regex);
    const res = digits.join('');
    setText(res)
    };


  
const handleSpaces =()=>{
/*  let regex =text.replace(/\s+/g,' ');  // global search of spaces */
    /* var nt = document.getElementById("myBox") //you can get the the text this way but this will not work with split as its an HTML feature..
    nt  = nt.split(/[ ]+/)*/
    let newText = text.split(/[ ]+/)   // using regex ad that + almost alswys comes
    setText(newText.join(" "))

}

const handletHiS = () => {
  let a = text.split(" ")
  var b = 'sex';
  for (var i = 0; i < a.length; i++)
  var counter=0;
  {
      for(var j = 0; j < a[i].length; j++){
          if(counter%2==0){
              b += a[i][j].toUpperCase();
          }
        counter+=1;
      }
  }
  
  setText(a[1]);
}



    const [text,setText] = useState('');
// Important.. To change text 
//setText("Now the text is set");
  return (
      <>
    <div className="container" style= {{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">                                                             {/* one bracket for javascript and another for object inside javascript */}
        <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div> {/* // Here we added onChange why?So that we can text to the field  */}
        
        <button className="btn btn-primary mx" onClick={handleUpClick}>Convert to Uppercase</button> 
        
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button> 
       
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear the Text</button> 

        <button className="btn btn-primary mx-2" onClick={handleSpaces}>Clear the extra spaces</button> 

        {/* <button className="btn btn-primary mx-2" onClick={handletHiS}>dO tHiS</button> */}

    </div>
    <div className="container my-3 " style= {{color: props.mode==='dark'?'white':'black'}} >
        <h2>Your Text Summary:</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
    
        <h3>How much time will One take to Read this?</h3>
        <p>{text.split(" ").length*0.008} Minutes</p>
    </div>
    </>
  )
}
