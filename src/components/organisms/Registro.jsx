import React from 'react'

export default function Registro() {
  return (
    <section id="registro" className="registration-section">
      <div className="container">
        <div className="grid grid-2">
          <div className="form-info">
            <h2>Únete a nuestra familia dulce</h2>
            <p>Regístrate y disfruta de beneficios exclusivos, promociones especiales y descuentos únicos en
              todos nuestros productos.</p>

            <div className="benefits-list">
              <div className="benefit-item">
                <span className="benefit-icon">✨</span>
                <div>
                  <h4>Descuentos exclusivos</h4>
                  <p>Accede a ofertas especiales solo para miembros</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🎂</span>
                <div>
                  <h4>Sorpresa de cumpleaños</h4>
                  <p>Recibe un regalo especial en tu día</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🚀</span>
                <div>
                  <h4>Acceso anticipado</h4>
                  <p>Sé el primero en conocer nuestros nuevos productos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="form-container">
            <form id="register-form" className="registration-form" noValidate>
              <div className="form-group">
                <label htmlFor="nombre" className="form-label">Nombre completo *</label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  className="form-control" 
                  required
                  autoComplete="name" 
                  aria-describedby="nombre-error" 
                />
                <div className="form-error" id="nombre-error">Por favor ingresa tu nombre completo</div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Correo electrónico *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-control" 
                  required
                  autoComplete="email" 
                  aria-describedby="email-error email-help" 
                />
                <small id="email-help" className="form-help">Usa tu correo @duoc.cl para beneficios
                  estudiantiles</small>
                <div className="form-error" id="email-error">Por favor ingresa un correo electrónico válido
                </div>
                <div className="form-success" id="email-success">¡Correo válido!</div>
              </div>

              <div className="form-group">
                <label htmlFor="fechaNacimiento" className="form-label">Fecha de nacimiento *</label>
                <input 
                  type="date" 
                  id="fechaNacimiento" 
                  name="fechaNacimiento" 
                  className="form-control"
                  required 
                  max="2010-01-01" 
                  aria-describedby="fecha-error fecha-help" 
                />
                <small id="fecha-help" className="form-help">Usuarios +50 años obtienen 50% de
                  descuento</small>
                <div className="form-error" id="fecha-error">Por favor selecciona tu fecha de nacimiento
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">Contraseña *</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  className="form-control" 
                  required
                  minLength="6" 
                  autoComplete="new-password"
                  aria-describedby="password-error password-help" 
                />
                <small id="password-help" className="form-help">Mínimo 6 caracteres</small>
                <div className="form-error" id="password-error">La contraseña debe tener al menos 6
                  caracteres</div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña *</label>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  name="confirmPassword" 
                  className="form-control"
                  required 
                  autoComplete="new-password" 
                  aria-describedby="confirm-password-error" 
                />
                <div className="form-error" id="confirm-password-error">Las contraseñas no coinciden</div>
              </div>

              <div className="form-group">
                <label htmlFor="codigoPromocional" className="form-label">Código promocional (opcional)</label>
                <input 
                  type="text" 
                  id="codigoPromocional" 
                  name="codigoPromocional" 
                  className="form-control"
                  placeholder="Ej: FELICES50" 
                  autoComplete="off" 
                  aria-describedby="codigo-help" 
                />
                <small id="codigo-help" className="form-help">Ingresa FELICES50 para 10% de descuento
                  permanente</small>
                <div className="form-success" id="codigo-success">¡Código válido aplicado!</div>
              </div>

              <div className="form-group">
                <label className="checkbox-container">
                  <input type="checkbox" id="terminos" name="terminos" required />
                  <span className="checkmark"></span>
                  Acepto los <a href="#" target="_blank" rel="noopener noreferrer">términos y condiciones</a> y la <a href="#"
                    target="_blank" rel="noopener noreferrer">política de privacidad</a>
                </label>
                <div className="form-error" id="terminos-error">Debes aceptar los términos y condiciones
                </div>
              </div>

              <button type="submit" className="btn btn-primary" id="submit-btn">
                <span className="btn-text">Registrarse</span>
                <span className="btn-loading hidden">Registrando...</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}