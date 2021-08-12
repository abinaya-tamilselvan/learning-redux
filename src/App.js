
import './App.css';
import React from "react";
import {useSelector} from "react-redux";
import {increment} from "./Actions";

function App() {
  const counter =useSelector(state =>state.counter);
  const isLogged = useSelector(state =>state.isLogged);
  return (
    <>
    <div className="App">
         <h1>counter</h1>
         <button onClick ={()=>dispatchEvent(increment())}>+ </button>
         <button>+ </button>
         {isLogged ? <h3> for authorized person only</h3>: " "}
    </div>
    </>
  );
}

export default App;
