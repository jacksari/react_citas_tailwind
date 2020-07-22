import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //Citas en LocalStorage
  let citasLocalStorage = JSON.parse(localStorage.getItem('citas'));
  if(!citasLocalStorage){
    citasLocalStorage = [];
  }else{

  }
  
  // Arreglo citas
  const [citas, guardarCitas] = useState(citasLocalStorage);

  //Use Effect
  useEffect( () => {
    if(citasLocalStorage){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasLocalStorage])

  // Función que toma las citas y crea una nueva
  const crearCita = cita => {
    //console.log('Cita creada',cita);
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  // //Función eliminar cita por su ID
  const eliminarCita = id => {
    //console.log(id);
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  //Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';


  return (
    <Fragment>
      <h1 className="text-4xl">Administrador de Pacientes</h1>
      <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 grid-row-1 sm:grid-cols-2 sm:grid-row-2 gap-2">
              <div className="border border-2 border-gray rounded-lg col-span-1 row-span-2">
                <Formulario
                  crearCita={crearCita}
                />
 
              </div>
              <div className="border border-2 border-gray rounded-lg col-span-1 row-span-2">
                <h2 className="text-2xl">{titulo}</h2>
                {citas.map(cita => (
                    <Cita
                      key={cita.id}
                      cita={cita}
                      eliminarCita={eliminarCita}
                    />
                ))}
              </div>
              
          </div> 
      </div>
    </Fragment>
  );
}

export default App;
