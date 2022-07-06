import './_app.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home UI/Home';
import Navbar from './Components/navbar/Navbar';
import EnrolForm from './Components/Enrolment UI/EnrolForm';
import Programme from './Components/Programme UI/Programme';
import About from './Components/About UI/About';
import ScrollToTop from './ScrollToTop';
import Contact from './Components/Contact UI/Contact';

function App() {
  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="App">
      {/* <Navbar /> */}
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/enrol' element={<EnrolForm />} />
          <Route path='/programme' element={<Programme />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </ScrollToTop>
    </div>
    // </LocalizationProvider>
  );
}

export default App;
