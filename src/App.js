import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import IndexCliente from './views/indexCliente';
import IndexAgendamiento from './views/indexAgendamientos';
import IndexPerfilCliente from './views/indexPerfilCliente';

function App() {
  return (
    <div className="App">
      <IndexAgendamiento
      />
      <IndexPerfilCliente/>
      
      
    </div>
  );
}


export default App;
