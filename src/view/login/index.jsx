import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import firebase from '../../config/firebase';
import 'firebase/auth';
import './login.css';
import Navbar from '../../components/navbar';

function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [msgType, setMsgType] = useState();
  const [loadingLogin, setLoadingLogin] = useState();

  const dispatch = useDispatch();

  function login() {
    setLoadingLogin(true);
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        setLoadingLogin(false);
        setMsgType('SUCCESS');

        setTimeout(() => {
          dispatch({ type: 'LOG_IN', userEmail: email });
        }, 1500);
      })
      .catch(err => {
        setLoadingLogin(false);
        setMsgType('ERROR');
      });
  }

  return (
    <div className='login-content w-100 d-flex align-items-center justify-content-center'>

      { useSelector(state => state.userLogged) ? <Redirect to='/' /> : null }

      <form className='text-center mx-auto'>
        <div className='text-center mb-4'>
          <i className='far fa-smile-wink fa-5x text-white'></i>
          <h1 className='h3 my-3 font-weight-bold text-white'>Login</h1>
        </div>

        <input onChange={(e) => setEmail(e.target.value)} type='email' id='inputEmail' className='form-control my-2' placeholder='Email' />
        <input onChange={(e) => setPassword(e.target.value)} type='password' id='inputPassword' className='form-control my-2' placeholder='Senha' />

        {
          loadingLogin ?
            <button className='btn btn-login w-100 d-flex align-items-center justify-content-center' type='button' disabled>
              <span className='spinner-border spinner-border-sm'></span>
              <span className='sr-only'>Carregando...</span>
            </button>
            :
            msgType !== 'SUCCESS' ?
            <button onClick={login} className='btn btn-login font-weight-bold w-100 d-flex align-items-center justify-content-center' type='button'>
              Entrar
            </button>
            : null
        }

        <div className='msg-login text-white text-center my-5'>
          {
            msgType === 'SUCCESS' &&
            <span role='img' aria-label='success'>
              <strong>WoW!</strong> Você está conectado! &#128526;
              </span>
          }

          {
            msgType === 'ERROR' &&
            <span role='img' aria-label='error'>
              <strong>Ops!</strong> Verifique se a senha ou usuário estão corretos! &#128546;
            </span>
          }
        </div>

        <div className='login-options mt-4 text-center'>
          <Link to='recovery' className='mx-2'>Recuperar senha</Link>
          <span className='text-white'>&#9733;</span>
          <Link to='signin' className='mx-2'>Quero cadastrar</Link>
        </div>
      </form>
    </div>
  )
}

export default Login;