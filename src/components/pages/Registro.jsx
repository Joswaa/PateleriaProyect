import React from 'react';

export default function Registro() {
  return (
    <section id="registro" style={{ padding: '4rem 0', background: '#fff9f0' }}>
      <div className="container">
        <div style={{ 
          maxWidth: '500px', 
          margin: '0 auto', 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '12px', 
          boxShadow: '0 4px 20px rgba(139, 69, 19, 0.1)' 
        }}>
          <h2 style={{ color: '#8b4513', textAlign: 'center', marginBottom: '2rem' }}>
            Crear Cuenta
          </h2>
          <form 
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            aria-label="Formulario de registro" // ✅ AGREGAR ESTO
          >
            {/* Campo Nombre Completo */}
            <div className="form-group">
              <label htmlFor="nombre" className="form-label"> {/* ✅ CORREGIDO: htmlFor */}
                Nombre completo
              </label>
              <input
                id="nombre"
                className="form-control"
                placeholder="Ingresa tu nombre completo"
                type="text"
              />
            </div>

            {/* Campo Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label"> {/* ✅ CORREGIDO: htmlFor */}
                Email
              </label>
              <input
                id="email"
                className="form-control"
                placeholder="tu@email.com"
                type="email"
              />
            </div>

            {/* Campo Contraseña */}
            <div className="form-group">
              <label htmlFor="password" className="form-label"> {/* ✅ CORREGIDO: htmlFor */}
                Contraseña
              </label>
              <input
                id="password"
                className="form-control"
                placeholder="Mínimo 8 caracteres"
                type="password"
              />
            </div>

            {/* Campo Confirmar Contraseña */}
            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label"> {/* ✅ CORREGIDO: htmlFor */}
                Confirmar contraseña
              </label>
              <input
                id="confirmPassword"
                className="form-control"
                placeholder="Repite tu contraseña"
                type="password"
              />
            </div>

            <button className="btn btn-primary" style={{ width: '100%' }} type="submit">
              Registrarse
            </button>
            
            <p style={{ textAlign: 'center', color: '#5d4037', margin: 0 }}>
              ¿Ya tienes cuenta?
              <a href="#login" style={{ color: '#8b4513', fontWeight: 600 }}>
                Inicia sesión aquí
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}