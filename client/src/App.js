import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthorList from "./components/AuthorList";
import AuthorCreate from "./components/AuthorCreate";


function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthorList />} />
        <Route path="/new" element={<AuthorCreate />} />
      </Routes>
    </div>
  );
}

export default App;
