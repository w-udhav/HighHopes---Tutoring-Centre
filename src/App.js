import './_app.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home UI/Home';
import Navbar from './Components/navbar/Navbar';
import EnrolForm from './Components/Enrolment UI/EnrolForm';

function App() {
  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/enrol' element={<EnrolForm />} />
      </Routes>
    </div>
    // </LocalizationProvider>
  );
}

export default App;
