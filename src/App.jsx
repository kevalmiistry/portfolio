import Navbar from './components/Navbar/Navbar';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About/About'
import Footer from './components/Footer/Footer';
import Techs from './components/Techs/Techs';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';

function App() {
    return (
        <>
          <Router>
                <Navbar />
            <div className="app">
                <Routes>
                  <Route exact path='/' element={<About />} />
                  <Route exact path='/about' element={<About />} />
                  <Route exact path='/technologies' element={<Techs />} />
                  <Route exact path='/education' element={<Education />} />
                  <Route exact path='/projects' element={<Projects />} />
                </Routes>
            </div>
                <Footer />
          </Router>
        </>
    );
}

export default App;
