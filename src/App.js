import React from "react";
import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
import Test from "./components/Test";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="login" element={<Test />} />
          </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
