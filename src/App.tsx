import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './app/AppContext';
import { Header } from './components/Header';
import { LanguageModal } from './features/language/components/LanguageModal';
import { HomePage } from './features/surgeries/pages/HomePage';
import { SurgeryPage } from './features/surgery-detail/pages/SurgeryPage';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <LanguageModal />
        <div className="min-h-screen bg-base-200 flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/surgery/:surgeryId" element={<SurgeryPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
