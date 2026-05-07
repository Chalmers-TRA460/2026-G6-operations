import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './app/AppContext';
import { Header } from './components/Header';
import { LanguageModal } from './features/language/components/LanguageModal';
import { HomePage } from './features/surgeries/pages/HomePage';
import { StomachAbdomenCategoryPage } from './features/surgeries/pages/StomachAbdomenCategoryPage';
import { SurgeryPage } from './features/surgery-detail/pages/SurgeryPage';

function AppLayout() {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <div className={`min-h-screen flex flex-col ${isLanding ? 'bg-base-100' : 'bg-base-200'}`}>
      {!isLanding && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/stomach-abdomen" element={<StomachAbdomenCategoryPage />} />
        <Route path="/surgery/:surgeryId" element={<SurgeryPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <LanguageModal />
        <AppLayout />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
