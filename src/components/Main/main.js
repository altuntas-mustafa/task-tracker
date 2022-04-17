import React from 'react';
import Header from '../Header/Header';
import LoggingButton from '../AddTask/addTask';
import "../Main/main.css";
import { useNavigate } from 'react-router-dom';

const Main = () => {
 let navigate = useNavigate();
  return (
    <div className='main'>
      <Header/>
      <button onClick={ () => { navigate("/addTask") }} > Show Add Bar</button>
      <h3>No Tasks To Show</h3>
    </div>
  )
}

export default Main