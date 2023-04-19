import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
// import React from 'react';
// import Dropdown from './components/Dropdown';
// import OurServices from './components/OurServices';
// import Hero from './components/Hero';
import GlobalStyle from './globalStyles';
// import About from './components/About';
// import Footer from './components/Footer';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import OurServices from './components/OurServices';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Arrival from './components/Arrival';
import About from './components/About';
import Footer from './components/Footer';
// import Home from './pages';


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }
 return (
  <>
  <GlobalStyle />
    <Navbar toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle} />
  <Routes>
    <Route path='/' element={<Hero slides={SliderData} />}></Route>
    <Route path='ourservices' element={<OurServices />}></Route>
    <Route path='arrival' element={<Arrival />}></Route>
    <Route path='about' element={<About />}></Route>
    <Route path='contactus' element={<Footer />}></Route>
  </Routes>
  </>
  //   <>
  //   <Router>
  //   <GlobalStyle />
  //   <Routes>
  //     <Route path="/" element={<Home />}></Route>
  //   </Routes>
  //   {/* <Navbar toggle={toggle} />
  //   <Dropdown isOpen={isOpen} toggle={toggle} />
  //   <Hero slides={SliderData} /> */}
  //  {/* <OurServices />
  //  <Arrival /> 
  //  <About />
  //  <Footer /> */}
  //  </Router>
  //   </>
  );

  }
  

export default App;





































// // import React, {useState} from 'react';
// import React from 'react';
// // import Dropdown from './components/Dropdown';
// // import OurServices from './components/OurServices';
// // import Hero from './components/Hero';
// // import Arrival from './components/Arrival';
// // import Navbar from './components/Navbar';
// // import { SliderData } from './data/SliderData';
// import GlobalStyle from './globalStyles';
// // import About from './components/About';
// // import Footer from './components/Footer';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages';
// // import Home from './pages';


// function App() {
//   // const [isOpen, setIsOpen] = useState(false)

//   // const toggle = () => {
//   //   setIsOpen(!isOpen);
//   // }
//  return (
//     <>
//     <Router>
//     <GlobalStyle />
//     <Routes>
//       <Route path="/" element={<Home />}></Route>
//     </Routes>
//     {/* <Navbar toggle={toggle} />
//     <Dropdown isOpen={isOpen} toggle={toggle} />
//     <Hero slides={SliderData} /> */}
//    {/* <OurServices />
//    <Arrival /> 
//    <About />
//    <Footer /> */}
//    </Router>
//     </>
//   );

//   }
  

// export default App;



















// import React, {useState} from 'react';
// import Dropdown from './components/Dropdown';
// import OurServices from './components/OurServices';
// import Hero from './components/Hero';
// import Arrival from './components/Arrival';
// import Navbar from './components/Navbar';
// import { SliderData } from './data/SliderData';
// import GlobalStyle from './globalStyles';
// import About from './components/About';
// import Footer from './components/Footer';
// // import {BrowserRouter as Router} from 'react-router-dom';
// // import Home from './pages';


// function App() {
//   const [isOpen, setIsOpen] = useState(false)

//   const toggle = () => {
//     setIsOpen(!isOpen);
//   }
//  return (
//     <>
//     <GlobalStyle />
//     {/* <Router> */}
//     <Navbar toggle={toggle} />
//     <Dropdown isOpen={isOpen} toggle={toggle} />
//     {/* </Router> */}
//     <Hero slides={SliderData} />
//    <OurServices />
//    <Arrival /> 
//    <About />
//    <Footer />
//     </>
//   );

//   }
  

// export default App;
