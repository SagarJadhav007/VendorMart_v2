import { Button } from "@/components/ui/button"
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/pages/Dashboard/Dashboard';
import SignupLogin from './components/pages/Auth/SignupLogin';
import Header from './components/pages/Header/Header';
import RegisterModal from './components/pages/Auth/RegisterModal';
import FindRawMaterialsDashboard from './components/Pages/Dashboard/FindRawMaterialsDashboard';
import layout from "./components/layout";
import SupplierDirectory from "./components/pages/SupplierDirectory/supplierDirectory";

const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element= {<Home/>}/>
      <Route path="/signup" element= {<SignupLogin/>}/>
      <Route path="/login" element= {<LoginModal/>}/>
      <Route path="/dashboard" element= {<Dashboard/>}/>
      <Route path="/findrawmaterials" element= {<FindRawMaterialsDashboard/>}/>
      <Route path="/supplierdirectory" element= {<SupplierDirectory/>}/>
    </Route>
  ))

function App() {
  return (
    <>
    <Header/>
    <Layout/>
    </>
  )
}

export default App