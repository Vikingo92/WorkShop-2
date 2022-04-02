import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Card from './components/Card';
import { Detalle } from './components/Detalle';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='Card' element={<Card />} />
          <Route path=':id' element={<Detalle />} />
          <Route path='*' element={<Card />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
