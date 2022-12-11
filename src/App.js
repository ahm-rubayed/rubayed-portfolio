
import { Toaster } from 'react-hot-toast';
import './App.css';
import Banner from './pages/Banner/Banner';
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
 </div>
  );
}

export default App;
