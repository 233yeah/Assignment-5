import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderView from "./components/HeaderView";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element ={<HeaderView/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
