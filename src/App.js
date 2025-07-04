// App.js --- YENİ HALİ

import { ThemeProvider } from 'styled-components';
// DEĞİŞECEK SATIR BURASI: BrowserRouter yerine HashRouter import ediyoruz.
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';
import { UserProgressProvider } from './contexts/UserProgressContext';
import Navbar from './components/layout/Navbar';
import DashboardPage from './pages/DashboardPage';
import LabPage from './pages/LabPage';
import Notification from './components/common/Notification';
import { useUserProgress } from './contexts/UserProgressContext';
import AchievementsPage from './pages/AchievementsPage';

// Notification'ı context'e erişebilmesi için ayrı bir bileşene taşıdık
const AppContent = () => {
  const { notification } = useUserProgress();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/lab" element={<LabPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
      </Routes>
      <Notification message={notification} />
    </>
  );
}

function App() {
  return (
    // Bu kısma dokunmuyoruz çünkü yukarıda "HashRouter as Router" dedik.
    <Router>
      <ThemeProvider theme={theme}>
        <UserProgressProvider>
          <GlobalStyle />
          <AppContent />
        </UserProgressProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;