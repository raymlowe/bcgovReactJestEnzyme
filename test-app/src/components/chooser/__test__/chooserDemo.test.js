import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Chooser from '../index';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../../App'
/*import {findByTestAttr} from '../../../../utils'*/

Enzyme.configure({ adapter: new Adapter() })

describe('Show Mount vs Shallow', () => {
    let m = mount(<App />)
    console.log(m.debug())
})

/*
1
*/

describe('Chooser Component Tests', () =>{
/*
2
*/

    it('has choosen eric', () => {
         let wrapper = mount(<Chooser/>);
         let choosen_developer = wrapper.find(".styleBlue");
         let erics_button = wrapper.find(".selector_button_eric");
         erics_button.simulate('click');
         expect(choosen_developer.text()).toBe("Eric");
    });
});

