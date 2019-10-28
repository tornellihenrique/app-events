import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './navbar.css';

function Navbar() {

    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-lg">
            <span className="navbar-brand text-white font-weight-bold">Eventos</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className='fas fa-bars text-white'></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>

                    {
                        !useSelector(state => state.userLogged) ?
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="signin">Signin</Link>
                                </li>
                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="cad-event">Publicar eventos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="">Meus eventos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={() => dispatch({ type: 'LOG_OUT' })}>Sair</Link>
                                </li>
                            </>
                    }

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;