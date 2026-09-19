import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import JoinClubModal from './components/Modals/JoinClubModal';

export default function Layout() {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  const dayNightPhase = useSelector((state) => state.ui.dayNightPhase);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const getThemeClass = () => {
    if (dayNightPhase === 'day') {
      return 'light-theme bg-[#f8fafc] text-slate-900';
    } else if (dayNightPhase === 'dawn') {
      return 'light-theme bg-[#fdf8f0] text-slate-900';
    } else if (dayNightPhase === 'dusk') {
      return 'dark-theme bg-[#0f091a] text-slate-100';
    } else {
      return 'dark-theme bg-[#030712] text-slate-100';
    }
  };

  return (
    <div className={`theme-container min-h-screen flex flex-col transition-colors duration-700 ${getThemeClass()}`}>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <JoinClubModal />
    </div>
  );
}