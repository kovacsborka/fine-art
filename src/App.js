import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Collections from './components/Collections';
import Navbar from './components/Navbar';



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/collections">
          <Collections/>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
