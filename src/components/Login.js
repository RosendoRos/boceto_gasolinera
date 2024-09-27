// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillPersonFill, BsLockFill, BsArrowRightCircleFill, BsPersonPlusFill } from "react-icons/bs";
import '../../src/login.css';  // Importa un archivo CSS externo

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Inicio de sesión simulado');
    navigate('/dashboard');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registro simulado');
    setIsRegistering(false);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isRegistering ? 'Registro' : 'Iniciar Sesión'}</h2>
        <form onSubmit={isRegistering ? handleRegister : handleLogin} className="login-form">
          <div className="input-group">
            <BsFillPersonFill className="icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <BsLockFill className="icon" />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            {isRegistering ? (
              <>
                <BsPersonPlusFill className="button-icon" /> Registrarse
              </>
            ) : (
              <>
                <BsArrowRightCircleFill className="button-icon" /> Iniciar sesión
              </>
            )}
          </button>
        </form>
        <button onClick={() => setIsRegistering(!isRegistering)} className="toggle-button">
          {isRegistering ? 'Ya tengo una cuenta' : 'Crear una cuenta'}
        </button>
      </div>
    </div>
  );
};

export default Login;
