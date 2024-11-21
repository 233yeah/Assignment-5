import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderView from "./components/HeaderView";
import HeroView from "./components/HeroView";
import FeatureView from "./components/FeatureView";

import './App.css'

function App() {

  return (
    <>
      <HeaderView />
      <HeroView />
      <FeatureView />

    </>

  )
}

export default App
