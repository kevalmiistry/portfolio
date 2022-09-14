import Navbar from './components/Navbar/Navbar';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About/About'

function App() {
    return (
        <>
          <Router>
            <div className="app">
                <Navbar />
                <Routes>
                  <Route exact path='/bout' element={<About />} />
                </Routes>
            </div>
          </Router>
        </>
    );
}

export default App;
