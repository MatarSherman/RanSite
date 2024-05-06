import './App.css'
import { Hero } from './pages/HomePage/Hero/Hero';
import { TopBar } from './components/TopBar/TopBar';
import { About } from './pages/HomePage/About';
import { Expertise } from './pages/HomePage/Expertise/Expertise';
import { Services } from './pages/HomePage/Services/Services';
import { Clients } from './pages/HomePage/Clients/Clients';
import { Team } from './pages/HomePage/Team/Team';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ExpertisePage } from './pages/ExpertisePage/ExpertisePage';
import { HomePage } from './pages/HomePage/Homepage';

export const App = () => {
  return (
    <BrowserRouter>
    <div className='app'>
        <TopBar />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/expertise' element={<ExpertisePage />}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
