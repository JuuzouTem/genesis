import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // Kullanıcı giriş yapmamışsa, login sayfasına yönlendir.
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;