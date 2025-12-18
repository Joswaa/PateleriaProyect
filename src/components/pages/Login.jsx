import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // NUEVO
import { loginRequest } from '../../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth(); // NUEVO
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await loginRequest(email, password);
      login(data.token); // NUEVO: actualiza el contexto
      navigate(from, { replace: true });
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="login" style={{ padding: '4rem 0', background: '#FFF9F0' }}>
      <div className="container">
        <div style={{ maxWidth: '500px', margin: '0 auto', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(139, 69, 19, 0.1)' }}>
          <h2 style={{ color: '#8B4513', textAlign: 'center', marginBottom: '2rem' }}>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label">Email / Usuario</label>
              <input
                type="text"
                className="form-control"
                placeholder="admin"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="pasteleria123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#5D4037' }}>
                <input type="checkbox" />
                Recordarme
              </label>
              <a href="#olvide-contraseña" style={{ color: '#8B4513', fontSize: '0.9rem' }}>
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
              {loading ? 'Ingresando...' : 'Ingresar'}
            </button>
            <p style={{ textAlign: 'center', color: '#5D4037', margin: 0 }}>
              ¿No tienes cuenta? <a href="#registro" style={{ color: '#8B4513', fontWeight: '600' }}>Regístrate aquí</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}