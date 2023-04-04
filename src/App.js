import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import AdminPage from './components/AdminPage';
import UserPage from './components/UserPage';
import AdminPortal from './components/AdminPortal';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>

              <Route path='/' element={<LandingPage/>} /> 
              <Route path='/adminpage' element={<AdminPage/>}/>
              <Route path='/userpage' element={<UserPage/>}/>
              <Route path='/admin/*' element={<AdminPortal/>}/>
            </Routes>       
        </BrowserRouter>
    </div>
  );
}

export default App;
