import './App.css';
import About from './pages/About';
import Apply from './pages/Apply';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Registration from './pages/Registration';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <Router>
      <ToastContainer theme='dark' position='top-center' />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Courses' element={<Courses />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Apply' element={<Apply />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
