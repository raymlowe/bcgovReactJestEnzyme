import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Chooser from '../index';
import Adapter from 'enzyme-adapter-react-16';
import {findByTestAttr} from '../../../../utils'

Enzyme.configure({ adapter: new Adapter() })

const setUpComponent = (props={}) => {
    const component = shallow(<Chooser {...props} />)
    return component;
};

describe('Header Component', () =>{

    test('Lets choose eric', () => {
        const wrapper = mount(<Chooser />)
        const choosen_developer = wrapper.find(`[data-test='setDeveloper']`);
        expect(choosen_developer.text()).toBe("");

         //Simulate button click
         const test_button = wrapper.find(`[data-test="setEric"]`);
         test_button.simulate('click');
         expect(choosen_developer.text()).toBe("Eric");
    });

    test('Choose craig', () => {
        const wrapper = mount(<Chooser />)
        const choosen_developer = wrapper.find(`[data-test='setDeveloper']`);
        expect(choosen_developer.text()).toBe(""); 

         //Simulate button click
         const test_button = findByTestAttr(wrapper, "setCraig")
         test_button.simulate('click');
         expect(choosen_developer.text()).toBe("Craig");
    })
});

