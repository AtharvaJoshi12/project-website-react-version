import "./App.css";
import MyHead from "./Components/MyHead";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import ProjectContainer from "./Components/ProjectContainer";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nextjs from "./Nextjs";
import Reactjs from "./Reactjs";
import Normal from "./Normal";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/nextjs" element={<Nextjs />}></Route>
        <Route path="/reactjs" element={<Reactjs />}></Route>
        <Route path="/normal" element={<Normal />}></Route>
        {/* <Route path="*" element={<ErrorPage />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
