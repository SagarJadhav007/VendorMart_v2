import { Button } from "@/components/ui/button"
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import SignupLogin from './components/Pages/Auth/SignupLogin';
import Header from './components/Pages/Header/Header';
import LoginModal from './components/Pages/Auth/LoginModal';
import FindRawMaterialsDashboard from './components/Pages/Dashboard/FindRawMaterialsDashboard';
import layout from "./components/layout";

const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element= {<Home/>}/>
      <Route path="/signup" element= {<SignupLogin/>}/>
      <Route path="/login" element= {<LoginModal/>}/>
      <Route path="/dashboard" element= {<Dashboard/>}/>
      <Route path="/findrawmaterials" element= {<FindRawMaterialsDashboard/>}/>
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