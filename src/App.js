
import './App.css';
import axios from 'axios';





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
    <div onClick={()=>test()}>
      test
    </div>
  );
}

export default App;
