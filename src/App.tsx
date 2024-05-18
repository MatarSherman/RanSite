import './App.css'
import { Hero } from './pages/HomePage/Hero/Hero';
import { TopBar } from './components/TopBar/TopBar';
import { About } from './pages/HomePage/About';
import { Expertise } from './pages/HomePage/Expertise/Expertise';
import { Services } from './pages/HomePage/Services/Services';
import { Clients } from './pages/HomePage/Clients/Clients';
import { Team } from './pages/HomePage/Team/Team';
import { BrowserRouter, Routes, Route, ScrollRestoration, useLocation } from 'react-router-dom';
import { ExpertisePage } from './pages/ExpertisePage/ExpertisePage';
import { HomePage } from './pages/HomePage/Homepage.tsx';
import { ClientsPage } from './pages/ClientsPage/ClientsPage';
import { useEffect } from 'react';

const HandleScrollPosition = ({ history, children }: any) => {
  const location = useLocation();
  const { pathname, hash } = location

  useEffect(() => {
    console.log(location)
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.split('#').at(-1)
    if (!id) return;
    const element = document.getElementById(id);
    if (element) element.scrollIntoView();
  }, [pathname]);

  return null;
}

export const App = () => {
  return (
    <BrowserRouter >
      <div className='app'>
        <TopBar />
        <HandleScrollPosition />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/expertise' element={<ExpertisePage />} />
          <Route path='/clients' element={<ClientsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
