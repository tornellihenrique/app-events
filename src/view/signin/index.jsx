import React, { useState } from 'react';
import './signin.css';

import firebase from '../../config/firebase';
import 'firebase/auth';
import Navbar from '../../components/navbar';

function Signin() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [msgType, setMsgType] = useState();
    const [msg, setMsg] = useState();
    const [loadingSignin, setLoadingSignin] = useState();

    function signin() {
        setMsgType(null);
        setLoadingSignin(true);

        if (!email || !password) {
            setLoadingSignin(false);
            setMsgType('ERROR');
            setMsg('Você precisa informar o email e senha para fazer o cadastro!');
            return;
        }

        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                setLoadingSignin(false);
                setMsgType('SUCCESS');
            })
            .catch(err => {
                setLoadingSignin(false);
                setMsgType('ERROR');
                if (err.code === 'auth/invalid-email') {
                    setMsg('Email inválido!');
                } else if (err.code === 'auth/email-already-in-use') {
                    setMsg('Email já cadastrado!');
                } else if (err.code === 'auth/weak-password') {
                    setMsg('A senha deve ter pelo menos 6 caracteres!')
                } else {
                    setMsg('Não foi possivel cadastrar. Tente novamente mais tarde!');
                }
            })
    }

    return (
        <div className='form-signin w-100 d-flex align-items-center justify-content-center'>
            <form className='text-center mx-auto'>
                <h1 className='h3 mb-3 text-black font-weight-bold'>
                    Cadastro
                    </h1>

                <input onChange={(e) => setEmail(e.target.value)} type='email' className='form-control my-2' placeholder='Email' />
                <input onChange={(e) => setPassword(e.target.value)} type='password' className='form-control my-2' placeholder='Senha' />

                {
                    loadingSignin ?
                        <button className='btn btn-signin font-weight-bold w-100 d-flex align-items-center justify-content-center' type='button' disabled>
                            <span className='spinner-border spinner-border-sm'></span>
                            <span className='sr-only'>Carregando...</span>
                        </button>
                        :
                        <button onClick={signin} type='button' className='btn btn-signin font-weight-bold w-100 d-flex align-items-center justify-content-center'>
                            Cadastrar
                            </button>
                }

                <div className='msg-login text-center my-5'>
                    {
                        msgType === 'SUCCESS' &&
                        <span role='img' aria-label='success'>
                            <strong>WoW!</strong> Usuário cadastrado com sucesso! &#128526;
                            </span>
                    }

                    {
                        msgType === 'ERROR' &&
                        <span role='img' aria-label='error'>
                            <strong>Ops!</strong> {msg} &#128546;
                            </span>
                    }
                </div>
            </form>
        </div>
    )
}

export default Signin;