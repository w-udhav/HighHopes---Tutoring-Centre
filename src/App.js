import './_app.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home UI/Home';
import Navbar from './Components/navbar/Navbar';
import EnrolForm from './Components/Enrolment UI/EnrolForm';
import Programme from './Components/Programme UI/Programme';

function App() {
  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/enrol' element={<EnrolForm />} />
        <Route path='/programme' element={<Programme />} />
      </Routes>
    </div>
    // </LocalizationProvider>
  );
}

export default App;
