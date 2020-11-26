import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../header';
import { findByTestAttr} from '../../../../utils'




/*////////////////////////////////////////////////////////////////////////
    Describe block (optional component): This encapsulates header tests
////////////////////////////////////////////////////////////////////////*/

describe('Header Component', () =>{
    
    /*////////////////////////////////////////////////////////////////////////
        Check to see if element exists by className
        We 'shallow' the header component to render it without dependancies
        If you want to see what looks like in the output you can .debug() the object after
    ////////////////////////////////////////////////////////////////////////*/
    it('should render without errors', () => {
        const component = shallow(<Header />);
        //console.log(component.debug());
        const wrapper = component.find('.headerComponent');
        expect(wrapper.length).toBe(1);
    });

    /*////////////////////////////////////////////////////////////////////////
        This is the same test as above, however this time we target the page
        element by a custom attribute. This is the preferred approach
    ////////////////////////////////////////////////////////////////////////*/
    it('should render without errors', () => {
        const component = shallow(<Header />);
        const wrapper = component.find(`[data-test="headerComponent"]`);
        expect(wrapper.length).toBe(1); 
    });

    /*////////////////////////////////////////////////////////////////////////
        Test for the logo object
    ////////////////////////////////////////////////////////////////////////*/
    it('Should render a logo', () =>{
        const component = shallow(<Header />);
        const logo = component.find('.logoIMG');
        expect(logo.length).toBe(1);
    })
});

/////////////////////////////////////////////////////////////////////////

/*////////////////////////////////////////////////////////////////////////
    We can extract repetative code to make the tests more readable
////////////////////////////////////////////////////////////////////////*/

const setUp = (props=[]) => {
    const component = shallow(<Header {...props} />);
    return component;
};

/* We are goign to move this to a UTILS folder since it will be reused often */
/*
const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}
*/

describe('Header Component', () =>{
    
    let header;
    beforeEach(() => {
        header = setUp();
    })

    it('should render without errors', () => {
        const wrapper = findByTestAttr(header, "headerComponent")
        expect(wrapper.length).toBe(1)
    });

    it('Should render a logo', () =>{
        //Before
        //const logo = component.find(`[data-test="logoIMG"]`);
        //After
        const logo = findByTestAttr(header, "logoIMG")
        expect(logo.length).toBe(1)
    })
});

