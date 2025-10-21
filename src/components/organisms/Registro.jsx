import React, { useState } from 'react';

export default function Registro() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    fechaNacimiento: '',
    password: '',
    confirmPassword: '',
    codigoPromocional: '',
    terminos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registrando usuario:', formData);
    // Aquí va tu lógica de envío y validación
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Nombre completo</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="form-control"
          placeholder="Nombre completo"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Correo electrónico</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          placeholder="Correo electrónico"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Fecha de nacimiento</label>
        <input
          type="date"
          name="fechaNacimiento"
          value={formData.fechaNacimiento}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Contraseña</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-control"
          placeholder="Contraseña"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Confirmar contraseña</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="form-control"
          placeholder="Confirmar contraseña"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Código promocional (opcional)</label>
        <input
          type="text"
          name="codigoPromocional"
          value={formData.codigoPromocional}
          onChange={handleChange}
          className="form-control"
          placeholder="Código promocional"
        />
      </div>
      <div className="form-group" style={{display: "flex", alignItems: "center"}}>
        <input
          type="checkbox"
          name="terminos"
          checked={formData.terminos}
          onChange={handleChange}
          required
        />
        <span style={{marginLeft: "8px"}}>Acepto los términos y condiciones</span>
      </div>
      <button type="submit" className="btn btn-primary">Registrarse</button>
    </form>
  );
}
