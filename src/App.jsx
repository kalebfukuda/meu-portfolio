import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import Home from './pages/home';

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );

}

export default App
