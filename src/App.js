
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Landing from './landing/landing';
import Error from './error/error';





function App() {

  axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
  axios.defaults.withCredentials = true;


const test= () =>{
console.log(process.env.REACT_APP_SERVER_URL)

  let config = {
  params :{
    data :"123"
  }
}
  axios.get("main/test",config).then((res=>{
    if(res.status === 200){
      console.log(res.data)
    }
  }))
}

  return (

    <div >
     <BrowserRouter>
        <Routes>
          <Route path = "/test" element={<Landing/>}/>
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter> 
  
    </div>
  );
}

export default App;
