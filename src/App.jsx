import Navbar from './components/Navbar/Navbar';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About/About'
import Footer from './components/Footer/Footer';

function App() {
  document.title = 'Keval Mistry'
    return (
        <>
          <Router>
                <Navbar />
            <div className="app">
                <Routes>
                  <Route exact path='/about' element={<About />} />
                </Routes>
            </div>
                <Footer />
          </Router>
        </>
    );
}

export default App;
