import React from "react";
import { Routes, Route } from "react-router-dom";
import PaginaLogin from "../Pages/PaginaLogin";
import PaginaHome from "../Pages/PaginaHome";

function Rotas() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PaginaLogin />} />
        <Route path="home" element={<PaginaHome />} />
      </Routes>
    </div>
  );
}

export default Rotas;
