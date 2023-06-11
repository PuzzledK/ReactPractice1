import {useState} from "react";
export default function TextArea(props) {

    const [text,setText]=useState('');
    const [words,setWords]=useState(0);

    const handleChange = (event) => {
    setText(event.target.value);
    setWords(event.target.value.split(' ').filter((element)=>{return element.length!==0}).length);
    }

    const handleUpClick = () => {
        let temp = text.toUpperCase();
        setText(temp);
        if(temp.length!==0){
        props.ShowType("Converted to UpperCase",'success');
        }
        else{
          props.ShowType('No Text in Text Area','warning');
        }
    }

    const handleLoClick =() => {
        let temp = text.toLowerCase();
        setText(temp);
        if(temp.length!==0){
        props.ShowType("Converted to LowerCase",'success');
        }else{
          props.ShowType('No Text in Text Area','warning');
        }
    }

    const handleClClick =() => {
      if(text.length!==0){
        props.ShowType("Text Cleared",'success');
      }else{
        props.ShowType('No Text in Text Area','warning');
      }
        let temp = '';
        setText(temp);
        setWords(0);
    }


    const handleCopy = () => {
        let temp = document.getElementById('textarea');
        temp.select();
        navigator.clipboard.writeText(temp.value);
        if(text!==''){
        props.ShowType("Text copied to Clipboard",'success');
        }else{
          props.ShowType('No Text in Text Area','warning');
        }
    }

   return (
    <div className="mb-3" style={{
        background : props.mode ==='light' ? 'white' : 'grey',
    }}>

  <textarea className="form-control container"  style={{
    background : props.mode==='dark'?'grey':'white',
    color : props.mode==='dark'?'white':'black',
    border : props.mode ==='dark'?'2px solid white':'2px solid black'
  }} id="textarea" rows="5" placeholder="Enter Text Here" value={text}onChange={handleChange}></textarea>

  <button className='btn btn-primary my-3 mx-2'  style={{
    background : props.mode==='dark'?'grey':'white',
    color : props.mode==='dark'?'white':'black',
    border : props.mode==='dark'?'2px solid white':'2px solid black'
  }} onClick={handleUpClick}>Click Here For UpperCase</button>

  <button className='btn btn-primary my-3 mx-2' s style={{
    background : props.mode==='dark'?'grey':'white',
    color : props.mode==='dark'?'white':'black',
    border : props.mode==='dark'?'2px solid white':'2px solid black'
  }} onClick={handleLoClick}>Click Here For LowerCase</button>

  <button className='btn btn-primary my-3 mx-2'  style={{
    background : props.mode==='dark'?'grey':'white',
    color : props.mode==='dark'?'white':'black',
    border : props.mode==='dark'?'2px solid white':'2px solid black'
  }} onClick={handleClClick}>Click Here to Clear</button>

  <button className="btn btn-primary mx-2"  style={{
    background : props.mode==='dark'?'grey':'white',
    color : props.mode==='dark'?'white':'black',
    border : props.mode==='dark'?'2px solid white':'2px solid black'
  }} onClick={handleCopy}>Copy Text</button>

  <h2 className='mx-2' style={{
    color: props.mode==='dark'?'white':'black'
  }}>About what you are writing :</h2>

  <h4 className='mx-2' style={{
    color:props.mode==='dark'?'white':'black'
  }}  >{words} Words</h4>

  <h2 className='mx-2' style={{
    color:props.mode==='dark'?'white':'black'
  }}  >This is What You are writing :</h2>

  <h4 className='mx-2' style={{
    color:props.mode==='dark'?'white':'black'
  }}  >{text}</h4>

</div>
   );
}