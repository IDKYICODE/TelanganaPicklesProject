import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";

const App = () => (
  <div style={{ textAlign: "center" }}>
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  </div>
);

export default App;