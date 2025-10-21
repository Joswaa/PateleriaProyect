import React from 'react'

export default function Login() {
  return (
    <section id="login" style={{ padding: '4rem 0', background: '#FFF9F0' }}>
      <div className="container">
        <div style={{ maxWidth: '500px', margin: '0 auto', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(139, 69, 19, 0.1)' }}>
          <h2 style={{ color: '#8B4513', textAlign: 'center', marginBottom: '2rem' }}>Iniciar Sesión</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="tu@email.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Contraseña</label>
              <input type="password" className="form-control" placeholder="Ingresa tu contraseña" />
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
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Ingresar
            </button>
            <p style={{ textAlign: 'center', color: '#5D4037', margin: 0 }}>
              ¿No tienes cuenta? <a href="#registro" style={{ color: '#8B4513', fontWeight: '600' }}>Regístrate aquí</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}