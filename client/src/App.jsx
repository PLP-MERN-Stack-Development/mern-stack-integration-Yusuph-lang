import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <div style={{padding:20,fontFamily:'Inter, Arial'}}>
      <nav style={{marginBottom:20}}><Link to='/'>Home</Link></nav>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}
