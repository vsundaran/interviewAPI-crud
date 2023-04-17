import React from "react";
import { Card } from "./form";
import { Table } from "./table";
import { ApiIntegration } from "./apiIntegration";
import { Route, Router, Routes, useNavigate } from "react-router-dom";

function App() {
  let nav = useNavigate();
  function navigateUser() {
    nav("/api");
  }

  return (
    <>
      <Routes>
        <Route path="/api" element={<ApiIntegration />} />
      </Routes>
      <div className="App">
        <div className="d-flexd-flex align-items-center">
          <span className="Title">Cortex Marketing </span>
          <span>
            <button
              className="btn btn-primary btn-sm  px-2"
              onClick={navigateUser}
            >
              Api
            </button>
          </span>
        </div>
        <Card />
        <Table />
        {/* <ApiIntegration /> */}
      </div>
    </>
  );
}

export default App;
