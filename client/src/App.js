import './App.css';
import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Form from "./Components/Form/Form";
import Detail from "./Components/Detail/Detail";
import Nav from "./Components/Nav/Nav";
import Display from './Components/Display/Display';
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/home' element={<Display/>}></Route>
        <Route path='/detail' element={<Detail/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
