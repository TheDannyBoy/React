import PropTypes from 'prop-types';
import { useState } from 'react';


const CounterApp = ({ initialValue }) => {

  const [counter, setCounter] = useState(0);

  const handleReset = () => setCounter(initialValue);
  const handleClick = () => setCounter( count => count + 1);
  const handleSubstract = () => setCounter( count => count - 1);

  return <>
    <h1>CounterApp</h1>
    <h2> { counter } </h2>
    <button onClick={handleSubstract}>-1</button>
    <button onClick={handleReset}>Reset</button>
    <button onClick={handleClick}>+1</button>
  </>
}


CounterApp.propTypes = {
  initialValue: PropTypes.number,
}

CounterApp.defaultProps = {
  initialValue: 0,
}

export default CounterApp;
