import './App.css'
import { Homepage } from './pages/Homepage/Homepage';
import { TopBar } from './components/TopBar/TopBar';
import { AboutPage } from './pages/AboutPage';
import { ExpertisePage } from './pages/ExpertisePage';
import { ServicesPage } from './pages/ServicesPage';
import { ClientsPage } from './pages/ClientsPage';
import { TeamPage } from './pages/TeamPage';

export const App = () => {
  return (
    <div className='app'>
        <TopBar />
        <Homepage />
        <AboutPage />
        <ExpertisePage />
        <ServicesPage />
        <ClientsPage />
        <TeamPage />
    </div>
  );
}

export default App;
