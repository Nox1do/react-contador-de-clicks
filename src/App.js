import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.svg'

function App() {
  return (
    <div className='App'>
  <div className='free-codecamp-logo-contenedor'>
    <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='Logo de freeCodeCamp' />
  </div>
    </div>
  );
};

export default App;
