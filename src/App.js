import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home/Home';
import Breakfast from './components/HomePage/Breakfast/Breakfast';
import Dinner from './components/HomePage/Dinner/Dinner';
import Lunch from './components/HomePage/Lunch/Lunch';
import UnUse from './components/UnUse/UnUse';
import MenuItem from './components/MenuItem/MenuItem';
import SignUp from './components/Shared/SignUp/SignUp';
import Login from './components/Shared/Login/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}>
         {/*  <Route path='/' element={<Breakfast/>}></Route>
          <Route path='/breakfast' element={<Breakfast/>}></Route>
          <Route path='/lunch' element={<Lunch/>}></Route>
          <Route path='/dinner' element={<Dinner/>}></Route> */}
        </Route>
        <Route path='/menuitem/:itemId' element={<MenuItem/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
