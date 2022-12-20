
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Banner from './pages/Banner/Banner';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Projects from './pages/Projects/Projects';
import router from './Routes/Router';

function App() {
  return (
 <div className="app">
  <RouterProvider router={router}>
  <Header/>
  <Banner/>
  <About/>
  <Projects/>
  <Blogs/>
  <Contact/>
  <Footer/>
  <Toaster/>
  </RouterProvider>
 </div>
  );
}

export default App;
