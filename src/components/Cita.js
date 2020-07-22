import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => {
    const { nombre, duenio, fecha, hora, sintomas } = cita;
    return (  
        <div className="grid grid-cols-1 grid-row-1 gap-1 sm:grid-cols-2 border border-red-500 mx-8 my-1 bg-gray-100 rounded-lg">
            <p className="col-span-1 px-2 ">Mascota: <span>{nombre}</span>  </p>
            <p className="col-span-1 px-2">Dueño: <span>{duenio}</span>  </p>
            <p className="col-span-1 px-2">Fecha: <span>{fecha}</span>  </p>
            <p className="col-span-1 px-2">Hora: <span>{hora}</span>  </p>
            <p className="col-span-1 px-2">Síntomas: <span>{sintomas}</span>  </p>
            <div className="flex justify-center col-span-1 px-2 my-1">
                <button 
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => eliminarCita(cita.id)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}
 
Cita.propType = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
export default Cita;