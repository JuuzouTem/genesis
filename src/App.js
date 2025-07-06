import { ThemeProvider } from 'styled-components';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';
import styled from 'styled-components';

// Context Providers
import { AuthProvider } from './contexts/AuthContext';
import { UserProgressProvider, useUserProgress } from './contexts/UserProgressContext';

// Bileşenler ve Sayfalar
import Navbar from './components/layout/Navbar';
import DashboardPage from './pages/DashboardPage';
import LabPage from './pages/LabPage';
import AchievementsPage from './pages/AchievementsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Notification from './components/common/Notification';
import ProtectedRoute from './components/common/ProtectedRoute';

const LoadingScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 2rem;
`;

const AppContent = () => {
  const { notification, loading } = useUserProgress();
  
  if (loading) {
      return <LoadingScreen>Sistem Başlatılıyor...</LoadingScreen>;
  }
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
        <Route path="/" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="/lab" element={<ProtectedRoute><LabPage /></ProtectedRoute>} />
        <Route path="/achievements" element={<ProtectedRoute><AchievementsPage /></ProtectedRoute>} />
      </Routes>
      <Notification message={notification} />
    </>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <UserProgressProvider>
            <GlobalStyle />
            <AppContent />
          </UserProgressProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;