import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Greeter from './components/Greeter';



const App = () => {
    const [username,setusername] =useState('');
    const handleinputonClick=()=>{
        setusername(username );
    

        
    }
  return (
      <div>
          <Greeter phrase="Hello there," name=" Luke!"/>
          <Greeter phrase="Hello there," name=" Jake"/>
          <Greeter phrase="Hello there," name=" Josh"/>

<input onClick={handleinputonClick} ></input>
<p>'You are logging in as: {username} '</p>
<button onClick>Website Loading</button>

      </div>
  )
};
export default App;
