import './App.css';
import Main from './components/Main/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import LoggingButton from './components/AddTask/addTask';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Main/>} />
        <Route path='/Header' element = {<Header/>} />
        <Route path='/addTask' element = {<LoggingButton/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

