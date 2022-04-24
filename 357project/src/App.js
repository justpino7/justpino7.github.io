import './App.css';
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import BarChartMoney from "./components/MoneyPage/BarChartMoney"
import BarChartFood from './components/FoodPage/BarChartFood';

// Redux

// Components
// import Dashboard from "./components/DashboardComponent/Dashboard";
import Navbar from "./components/Navbar";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HomePage from './components/HomePage/HomePage';
function App() {
  return (
      <Router>
        <Fragment>
          <div className="pageWrap">
            <Navbar />
            <HomePage/>
          </div>

          <section className="container">
            {/* <Sidebar /> */}
            <div className="dashboardContent">
              <Routes>
                <Route path="/" element={<BarChartMoney />} />
                <Route path="/a" element={<BarChartFood />} />
              </Routes>
            </div>
          </section>
        </Fragment>
      </Router>
  );
}

export default App;
