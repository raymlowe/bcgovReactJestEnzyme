import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Chooser from '../index';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

const setUpComponent = (props={}) => {
    const component = shallow(<Chooser {...props} />)
    return component;
};

describe('Header Component', () =>{

    it('Text in state is changed when button clicked', () => {
        const wrapper = mount(<Chooser />)
        const test_state = wrapper.find(`[data-test="test_state"]`);
        expect(test_state.text()).toBe("Initial State");

        //Simulate button click
        const test_button = wrapper.find(`[data-test="test_name_button"]`);
        test_button.simulate('click');
        expect(test_state.text()).toBe("Initial State Changed");
    });

    test('Lets choose eric', () => {
        const wrapper = mount(<Chooser />)
        const choosen_developer = wrapper.find(`[data-test='setDeveloper']`);
        expect(choosen_developer.text()).toBe("");

         //Simulate button click
         const test_button = wrapper.find(`[data-test="setEric"]`);
         test_button.simulate('click');
         expect(choosen_developer.text()).toBe("Eric");
    });

});

