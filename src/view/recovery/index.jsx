import React, { useState } from 'react';

import firebase from '../../config/firebase';
import 'firebase/auth';
import './recovery.css';

function Recovery() {

    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function recovery() {
        firebase.auth()
            .sendPasswordResetEmail(email)
            .then(res => {
                setMsg('Enviamos um link de redefinição de senha para seu email!');
            })
            .catch(err => {
                setMsg('Email não cadastrado!');
            })
    }

    return (
        <div className='recovery-content w-100 d-flex align-items-center justify-content-center'>
            <form className='text-center mx-auto'>
                <div className='text-center mb-4'>
                    <h1 className='h3 my-3 font-weight-bold text-white'>Recuperar senha</h1>
                </div>
                <input onChange={(e) => setEmail(e.target.value)} className='form-control my-2' type="email" placeholder='Email' />

                <div className='msg text-center text-white my-4'>
                    <span>{msg}</span>
                </div>

                <button onClick={recovery} className='btn btn-recovery font-weight-bold w-100 d-flex align-items-center justify-content-center' type='button'>
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default Recovery;