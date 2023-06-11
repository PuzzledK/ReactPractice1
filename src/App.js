import { useState } from 'react';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alertcomp from './components/Alertcomp';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { About } from './components/About';

function App() {
  const[alert,setAlert] = useState(null);
  const [mode,setMode] = useState('light');
  const clickHandler = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      ShowType('Dark Mode has been enabled','success');
      document.body.style.color='white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      ShowType('Light Mode has been enabled','success');
      document.body.style.color='black';
    }
  }
  const ShowType = (message,type) => {
    setAlert({
      msg :message,
      type : type
    });
    setTimeout(() =>setAlert(null),2200);
  }
  return (
    <>
    
    <Router>
    <Navbar title='Text Analizer App' mode={mode} toggler={clickHandler}/>
    <Alertcomp alert={alert} ShowType={ShowType}/>
     <Routes>

       <Route exact index element={<div className="container my-4"><TextArea mode={mode} ShowType={ShowType}/></div>}/>

       <Route exact path='/about' element={<About/>}/>

     </Routes>
    </Router>
    </>
  );
}

export default App;