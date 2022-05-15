import Componente from './componentes/Componente';
import logo from './logo.svg';
import './App.css';
import Propiedades from './componentes/Propiedades';
import Estado from './componentes/Estado';
import RenderizadoCondicional from './componentes/RenderizadoCondicional';
import RenderizadoElementos from './componentes/RenderizadoElementos';
import Eventos from './componentes/Eventos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
        <section>
        <Componente msg="Hola, soy un componente funcional expresado desde una prop"/>
        <hr/>
        <Propiedades 
            cadena="Esto es una cadena de texto"
            numero={19}
            booleano={true}
            arreglo={[1,2,3]}
            objeto={{nombre: "Jonh", correo: "jon@gmail.com"}}
            funcion={num => num*num}
            elementoReact={<i>Esto es un elemento React</i>}
            componenteReact={<Componente msg= "Soy un componente pasado como prop"/>}
        />
        <hr/>
        <Estado/>
        <hr/>
        <RenderizadoCondicional/>
        <hr/>
        <RenderizadoElementos/>
        <hr/>
        <Eventos/>
      </section>

      </header>
      
    </div>
  );
}

export default App;
