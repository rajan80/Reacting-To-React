import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Greeter from "./components/Greeter";

const App = () => {
    

  const [username, setusername] = useState("");
  const [loaded, setloaded] = useState(false);
  useEffect( ()=>{
    setTimeout( ()=>{setloaded(true) }, 3000);
 }, []);
  
  
  const handleinputonChange = (e) => {
    setusername(e.target.value);
  };

  const handleButtonClick = (e) => {
    setloaded(true);
  };
  
  if (loaded) {
    return (
      <div>
        <Greeter phrase="Hello there," name=" Luke!" />
        <Greeter phrase="Hello there," name=" Jake" />
        <Greeter phrase="Hello there," name=" Josh" />

        <input onChange={(e) => handleinputonChange(e)}></input>
        <p>'You are logging in as: {username} '</p>
      </div>
    );
  } else {
      return(
    <>
      <h1>loading</h1>
      <button onClick={(e) => handleButtonClick(e)}>click Me</button>
    </>);
  }

}
export default App;
