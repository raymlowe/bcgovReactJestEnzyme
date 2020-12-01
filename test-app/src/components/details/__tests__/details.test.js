import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import App from '../../../App';
import Details from '../index';
import Adapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';

Enzyme.configure({ adapter: new Adapter() })


const setUpApp = () => {
    const application = mount(<App />)
    return application;
};
const setUpComponent = (props={}) => {
    const component = shallow(<Details {...props} />)
    return component;
};

const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

//First, lets load the entire app and confirm that Darth Vader is the recruiter
describe('Load Application Tests', () => {

    const appWrapper = setUpApp();
    const recruiterName = appWrapper.find(`[data-test="recruiterfName"]`);

    it('first name should be named Darth', () => {
        expect(recruiterName.text()).toBe("First Name: Darth");
    });
});

//We want to test the component directly with someone friendlier as a recruitment officer!
describe('Load component with mocks test', () => {

    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            header: 'Imperial Recruiting Offices',
            slogan: 'Imperial Rule',
            recruiter: [
                {
                    fname: 'Moff',
                    lname: 'Tarkin',
                    email: 'happiness@galaticempire.com',
                    age: 66,
                    onlineStatus: true
                }
            ]
        };
        wrapper = setUpComponent(props);
    });

    //Is our MOCK any good? verify the types
    test('property types should be valid', () => {
        const propsErr = checkProps(Details, props)
        expect(propsErr).toBeUndefined(); //there should be no error this these conditions
    });

    //Verify the header name
    it('should be called: Imperial Recruiting Offices', () => {
        const header = wrapper.find(`[data-test="descriptionHeader"]`);
        expect(header.text()).toBe("Imperial Recruiting Offices");
    });
    
    //Verify new slogan
    it('should be called: Imperial Rule', () => {
        const slogan = wrapper.find(`[data-test="descriptionSlogan"]`);
        expect(slogan.text()).toBe("Imperial Rule");
    });
});