import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import firebase from '../../config/firebase';
import './cad-event.css';

function CadEvent() {
    return (
        <div className="col-12 mt-3">
            <div className="row">
                <h3 className="mx-auto font-weight-bold">Novo evento</h3>
            </div>

            <form>
                <div className="form-group">
                    <label>Título:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Tipo do evento:</label>
                    <select className="form-control">
                        <option disabled selected>-- Selecione um tipo --</option>
                        <option>Festa</option>
                        <option>Teatro</option>
                        <option>Show</option>
                        <option>Evento</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Descrição do evento:</label>
                    <textarea className="form-control" rows="3"></textarea>
                </div>
                <div className="form-group form-row">
                    <div className="col-6">
                        <label>Data:</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="col-6">
                        <label>Hora:</label>
                        <input type="time" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Upload da foto:</label>
                    <input type="file" className="form-control-file" />
                </div>

                <button type="button" className="btn btn-signin font-weight-bold w-100 d-flex align-items-center justify-content-center">
                    Cadastrar evento
                </button>
            </form>
        </div>
    )
}

export default CadEvent;