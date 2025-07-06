import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import styled from 'styled-components';

// LoginPage'deki stilleri tekrar kullanabiliriz.
const AuthContainer = styled.div`
  max-width: 400px;
  margin: 5rem auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  text-align: center;
`;
const Form = styled.form` display: flex; flex-direction: column; gap: 1rem; `;
const Input = styled.input` padding: 0.8rem; background-color: ${({ theme }) => theme.colors.background}; border: 1px solid ${({ theme }) => theme.colors.primary}; color: ${({ theme }) => theme.colors.text}; border-radius: 4px; `;
const Button = styled.button` padding: 1rem; background-color: ${({ theme }) => theme.colors.primary}; color: white; border: none; cursor: pointer; font-size: 1rem; border-radius: 4px; &:hover { background-color: ${({ theme }) => theme.colors.secondary}; } `;
const ErrorMessage = styled.p` color: ${({ theme }) => theme.colors.accent}; `;
const SwitchLink = styled(Link)` color: ${({ theme }) => theme.colors.secondary}; margin-top: 1rem; display: inline-block; `;


function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await signup(email, password);
      navigate('/'); // Kayıt sonrası ana sayfaya yönlendir
    } catch (err) {
      setError('Kayıt başarısız. Lütfen geçerli bir e-posta girin ve şifrenizin en az 6 karakter olduğundan emin olun.');
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <AuthContainer>
      <h2>Kayıt Ol</h2>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form onSubmit={handleSubmit}>
        <Input type="email" placeholder="E-posta" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input type="password" placeholder="Şifre (en az 6 karakter)" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button disabled={loading} type="submit">Kayıt Ol</Button>
      </Form>
      <SwitchLink to="/login">Zaten bir hesabın var mı? Giriş Yap</SwitchLink>
    </AuthContainer>
  );
}

export default SignupPage;