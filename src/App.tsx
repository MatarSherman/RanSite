import './App.css'
import { TopBar } from './components/TopBar/TopBar.tsx';
import { BrowserRouter, Routes, Route, ScrollRestoration, useLocation } from 'react-router-dom';
import { ExpertisePage } from './pages/ExpertisePage/ExpertisePage.tsx';
import { ClientsPage } from './pages/ClientsPage/ClientsPage.tsx';
import { useEffect } from 'react';
import { HomePage } from './pages/HomePage/HomePage.tsx';

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
