import React, { useState } from 'react';
import './login.css';

import firebase from '../../config/firebase';
import 'firebase/auth';

function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function login() {
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        alert('USUARIO LOGADO!');
      })
      .catch(err => {
        alert(err);
      });
  }

  return (
    <div className='login-content d-flex align-items-center'>
      <form className='form-signin mx-auto'>
        <div className='text-center mb-4'>
          <h1 className='h3 mb-3 font-weight-bold text-white'>Login</h1>
        </div>

        <input onChange={(e) => setEmail(e.target.value)} type='email' id='inputEmail' className='form-control my-2' placeholder='Email' />
        <input onChange={(e) => setPassword(e.target.value)} type='password' id='inputPassword' className='form-control my-2' placeholder='Senha' />

        <button onClick={login} className='btn btn-lg btn-login btn-block' type='button'>Entrar</button>

        <div className='msg-login text-white text-center my-5'>
          <span><strong>WoW!</strong> Você está conectado! &#128526;</span>
          <span><strong>Ops!</strong> Verifique se a senha ou usuário estão corretos! &#128546;</span>
        </div>

        <div className='login-options mt-4 text-center'>
          <a href='#' className='mx-2'>Recuperar senha</a>
          <span className='text-white'>&#9733;</span>
          <a href='#' className='mx-2'>Quero cadastrar</a>
        </div>
      </form>
    </div>
  )
}

export default Login;