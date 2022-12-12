
import { Toaster } from 'react-hot-toast';
import './App.css';
import Banner from './pages/Banner/Banner';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import Header from './pages/Header/Header';
import Projects from './pages/Projects/Projects';

function App() {
  return (
 <div className="app">
  <Header/>
  <Banner/>
  <Projects/>
  <Contact/>
  <Toaster/>
  <Blogs/>
 </div>
  );
}

export default App;
