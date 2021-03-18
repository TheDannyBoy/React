// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import PrimeraApp from '../components/PrimeraApp';

describe('Testing - PrimeraApp component', () => {
  test('Should show <PrimeraApp /> correctly', () => {
    const saludo = 'Hola, soy Goku';
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should show the subtitle sent from the props', () => {
    const saludo = 'Hola, soy Goku';
    const subtitulo = 'Soy un subtitulo';
    const wrapper = shallow(<PrimeraApp
      saludo={saludo}
      subtitulo={subtitulo}
    />);

    const textoParrafo = wrapper.find('p').text();
    expect(textoParrafo).toBe(subtitulo);
  });
});
