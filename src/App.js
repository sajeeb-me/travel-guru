import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './Pages/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className='text-white body'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
