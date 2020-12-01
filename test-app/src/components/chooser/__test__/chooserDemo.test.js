import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Chooser from '../index';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../../App'
import {findByTestAttr} from '../../../../utils'

Enzyme.configure({ adapter: new Adapter() })



describe('Chooser Component Tests', () =>{

    let wrapper;
    let choosen_developer;
    beforeEach(() => {
        wrapper = mount(<Chooser/>);
        choosen_developer = findByTestAttr(wrapper, "setDeveloper");
    });



    it('has choosen eric', () => {
         let erics_button = findByTestAttr(wrapper, "setEric");
         erics_button.simulate('click');
         expect(choosen_developer.text()).toBe("Eric");
    });



    it('has choosen craig', () => {
        let craig_button = findByTestAttr(wrapper, "setCraig");
        craig_button.simulate('click');
        expect(choosen_developer.text()).toBe("Craig");
    });


});

