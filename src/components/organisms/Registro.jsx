import React from 'react'

export default function Registro() {
  return (
    <section id="registro" style={{ padding: '4rem 0', background: '#FFF9F0' }}>
      <div className="container">
        <div style={{ maxWidth: '500px', margin: '0 auto', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(139, 69, 19, 0.1)' }}>
          <h2 style={{ color: '#8B4513', textAlign: 'center', marginBottom: '2rem' }}>Crear Cuenta</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label">Nombre completo</label>
              <input type="text" className="form-control" placeholder="Ingresa tu nombre completo" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="tu@email.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Contraseña</label>
              <input type="password" className="form-control" placeholder="Mínimo 8 caracteres" />
            </div>
            <div className="form-group">
              <label className="form-label">Confirmar contraseña</label>
              <input type="password" className="form-control" placeholder="Repite tu contraseña" />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Registrarse
            </button>
            <p style={{ textAlign: 'center', color: '#5D4037', margin: 0 }}>
              ¿Ya tienes cuenta? <a href="#login" style={{ color: '#8B4513', fontWeight: '600' }}>Inicia sesión aquí</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}