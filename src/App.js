import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Collections from './components/Collections/Collections';
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/collections" element={<Collections/>}/>
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
