import { shallow } from 'enzyme'
import CounterApp from '../components/CounterApp'

describe('Pruebas en CounterApp', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('CounterApp debe crearse correctamente y mostrar el contador por defecto', () => {
    const valorContador = wrapper.find('h2').text().trim();

    expect(wrapper).toMatchSnapshot();
    expect(valorContador).toBe('10');
  });

  test('Al pasar el valor del contador como prop, debería visualizarse ese mismo valor', () => {
    const wrapper = shallow(<CounterApp initialValue={100}/>)
    const valorContador = wrapper.find('h2').text().trim();

    expect(wrapper).toMatchSnapshot();
    expect(valorContador).toBe('100');
  });

  test('Debería incrementar en 1 el contador al darle click al botón +1', () => {
    wrapper.find('button').at(2).simulate('click');
    const valorContador = wrapper.find('h2').text().trim();
    expect(valorContador).toBe('11');
  });

  test('Debería decrementar en 1 el contador al darle click al botón -1', () => {
    wrapper.find('button').at(0).simulate('click');
    const valorContador = wrapper.find('h2').text().trim();
    expect(valorContador).toBe('9');
  });

  test('Debería resetear el contador al darle click al reset', () => {
    const wrapper = shallow(<CounterApp initialValue={1000}/>)
    wrapper.find('button').at(2).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const valorContador = wrapper.find('h2').text().trim();
    expect(valorContador).toBe('1000');
  });


});
