import React from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Services from './Components/services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
const App = () => {
  return (
    <div>  
    <ToastContainer/>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      {/* <script>
      let count = 50;
      let scene = document.querySelector('.scene')
     </script> */}
    </div>
  )
}

export default App