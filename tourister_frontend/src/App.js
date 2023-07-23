import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AddLocation from "./components/AddLocation";
import AboutUs from "./components/AboutUs";
import FindLocation from "./components/FindLocation";
import "./App.css";
import { UserProvider } from "./UserContext";
import UserAuth from "./UserAuth";
// import './style.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="login" />
            <Route element={<Signup />} path="signup" />
            <Route element={ <UserAuth> <AddLocation /> </UserAuth>} path="addlocation" />
            <Route element={<FindLocation />} path="findLocation/:place" />
            <Route element={<AboutUs />} path="aboutus" />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
