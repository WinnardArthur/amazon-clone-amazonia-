import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />
          <Route path="/checkout" element={
            <>
              <Header />
              <Checkout />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
