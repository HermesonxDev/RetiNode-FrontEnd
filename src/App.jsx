import React from 'react';
import './App.css';
import MenuBar from './components/MenuBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <MenuBar />
      <Outlet />
    </div>
  )
}

export default App