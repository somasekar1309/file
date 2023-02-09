import logo from './logo.svg';
import Counter from './Counter';
import './App.css';
import Todolist from './Todolist';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Countries from './Countries';
import Airlines from './Airlines';
function App() {
  return (
    <div className="App">
      
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  );
}

export default App;
