import React from 'react'
import Header from '../Header/Header';
import "./addTask.css"
import { useNavigate } from 'react-router-dom';
import Task from '../Task/Task';

const LoggingButton = () =>   {
  let navigate = useNavigate();
    return (
      <div className='container'>
          <Header/>
          <button onClick={() => { navigate("/") }}>Close Add Task Bar</button>
          <br />
          <br />
          <Task/>
      </div>
        
    );
  }


export default LoggingButton;