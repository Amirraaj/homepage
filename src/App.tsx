import React from 'react';
import './App.scss';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter >
        {/* <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes> */}
        <Home />
     </BrowserRouter>
    </div>
  );
}

export default App;
