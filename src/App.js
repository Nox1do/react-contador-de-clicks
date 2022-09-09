import './App.css';
import Boton from './componentes/Boton.js';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.svg'

function App() {
const ismanejarClic = () => {
  console.log('clic');
}

const reiniciarContador = () => {
  console.log ('Reiniciar');
}

  return (
    <div className='App'>
  <div className='free-codecamp-logo-contenedor'>
    <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='Logo de freeCodeCamp' />
  </div>
  <div className='contenedor-contador'>
   <Boton /*Boton para hacer Clic*/
   texto='Clic'
   esBotonDeClic={true}
   manejarClic={ismanejarClic} />
   <Boton /*Boton para reiniciar */
   texto='Reiniciar'
   esBotonDeClic={false}
   manejarClic={reiniciarContador} />
  </div>
    </div>
  );
};

export default App;
