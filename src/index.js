import ReactDOM from 'react-dom';
import CounterApp from './components/CounterApp';
// import PrimeraApp from './components/PrimeraApp';
import './index.css';

// const saludo = 'Hola, soy Goku';
const divRoot = document.querySelector('#root')

// ReactDOM.render(<PrimeraApp saludo={saludo} />, divRoot);
ReactDOM.render(<CounterApp initialValue={0} />, divRoot);
