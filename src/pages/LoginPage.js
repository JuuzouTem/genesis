import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import styled from 'styled-components';

// Bu stilleri projenize uygun şekilde düzenleyebilirsiniz.
const AuthContainer = styled.div`
  max-width: 400px;
  margin: 5rem auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.accent};
`;

const SwitchLink = styled(Link)`
    color: ${({ theme }) => theme.colors.secondary};
    margin-top: 1rem;
    display: inline-block;
`;

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Giriş başarısız. Lütfen bilgilerinizi kontrol edin.');
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <AuthContainer>
      <h2>Giriş Yap</h2>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form onSubmit={handleSubmit}>
        <Input type="email" placeholder="E-posta" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input type="password" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button disabled={loading} type="submit">Giriş Yap</Button>
      </Form>
      <SwitchLink to="/signup">Hesabın yok mu? Kayıt Ol</SwitchLink>
    </AuthContainer>
  );
}

export default LoginPage;