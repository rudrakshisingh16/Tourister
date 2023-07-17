import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
// import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from'react-router-dom';
import {Toaster} from 'react-hot-toast';   
// import './style.css';

function App() {
  return (

    <div>
    {/* <Toaster position= "top-center" /> */}
    {/* <h1>Rudrakshi Singh</h1> */}
    <BrowserRouter>
    <Navbar/>
      <Routes> 
        <Route element={ <Home />} path="home" />
        <Route element={ <Login />} path="login" />
        <Route element={ <Signup />} path="signup" />
      
           

      </Routes>
    </BrowserRouter>

  </div>
  );
}

export default App;
