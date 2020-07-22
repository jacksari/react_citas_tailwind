import React,{Fragment, useState} from 'react';
import uniqueString from 'unique-string';
import PropTypes from 'prop-types';


const Formulario = ({crearCita}) => {
    // Crear state de Citas
    const [cita, actualizarCita] = useState({
        nombre: '',
        duenio: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false);

    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const { nombre, duenio, fecha, hora, sintomas } = cita;

    const submitCita = e => {
        e.preventDefault();
        //Validar
        if(nombre.trim() === '' || duenio.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }
        actualizarCita(false);

        //Asignar ID
        cita.id = uniqueString();
        //console.log('cita', cita);
        //Agregar cita
        crearCita(cita);

        //Reiniciar form
        actualizarCita({
            nombre: '',
            duenio: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })

    }

    return ( 
        <Fragment>
            <h1 className="text-2xl">Crear Cita</h1>

            { error 
            ?   <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-10 mx-8 py-3 rounded-lg" role="alert">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                    <p>Todos los campos son obligatorios</p>
                </div>
            :   null
            }

            <form
                onSubmit={submitCita}
            >
                {/* Input Nombre de mascota */}
                <div className="my-4 px-8">
                    <label className="block text-gray-200 text-sm font-bold mb-2">
                        Nombre de Mascota
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="nombre" 
                        type="text" 
                        name="nombre"
                        placeholder="Nombre de Mascota: Ejem Toby"
                        onChange={actualizarState}
                        value={nombre}
                        />
                </div>
                {/* Input dueño de mascota */}
                <div className="my-4 px-8">
                    <label className="block text-gray-200 text-sm font-bold mb-2">
                        Dueño de mascota
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="duenio" 
                        type="text" 
                        name="duenio"
                        placeholder="Dueño de Mascota: Ejem Jack"
                        onChange={actualizarState}
                        value={duenio}
                        />
                </div>
                {/* Inout hora y fecha */}
                <div className="grid grid-cols-1 grid-row-1 sm:grid-cols-5 my-4 px-8">
                    <div className="sm:mr-2 col-span-3">
                        <label className="block text-gray-200 text-sm font-bold mb-2">
                            Fecha
                       </label>
                       <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="fecha" 
                            type="date" 
                            name="fecha"
                            onChange={actualizarState}
                            value={fecha}
                            />
                    </div>
                    <div className="sm:ml-2 col-span-2">
                        <label className="block text-gray-200 text-sm font-bold mb-2">
                            Hora
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="hora" 
                            type="time" 
                            name="hora"
                            onChange={actualizarState}
                            value={hora}
                            />
                    </div>
                </div>
                {/* TextArea de síntomas de mascota */}
                <div className="my-4 px-8">
                    <label className="block text-gray-200 text-sm font-bold mb-2">
                        Síntomas
                    </label>
                    <textarea
                        name="sintomas" 
                        className="w-full p-2"
                        placeholder="Indicar los síntomas de la mascota" 
                        rows="3"
                        onChange={actualizarState}
                        value={sintomas}
                    ></textarea>
                </div>
                <div className="flex my-4 px-8">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded">
                        Enivar Datos
                    </button>
                </div>
                
            </form>
        </Fragment>

     );
}
 
Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;