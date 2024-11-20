import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderView from "./components/HeaderView";
import HeroView from "./components/HeroView";
import './App.css'

function App() {

  return (
    <>
      <HeaderView />
      <HeroView />
    </>

  )
}

export default App
