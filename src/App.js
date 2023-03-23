import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import All from './pages/All';
import Search from './pages/Search';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/all" element={<All />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
