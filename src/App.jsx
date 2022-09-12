import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, CatalogPage, ErrorPage } from "./pages";
import { Navbar } from "./components/Navbar/Navbar.jsx";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <h1>hello</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
