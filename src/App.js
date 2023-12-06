
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from "./Pages/Home";
import Interest from "./Pages/Interest";

function App() {
  return (
    // <div className="App">

    // </div>

    <>
    <Router>
      <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/interest" element={<Interest/>}/>
          <Route path="/dashboard/:userId" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>
    </>
    
  );
}

export default App;
