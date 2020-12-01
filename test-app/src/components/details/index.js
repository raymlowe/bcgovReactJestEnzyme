import React, { Component }  from 'react';
import PropTypes from 'prop-types';

class Details extends Component {
    
    //constructor taking in props. See App.js for where it gets passed in
    constructor(props){
        super(props);
    }
    
    
    render(){
        
        //properites: see apps.js for where it gets passed in
        
        const {header, slogan, recruiter} = this.props;
  
        if(!header){
            return null;
        }

       return(
           <div data-test="DescriptionComponent">
                <h2 data-test="descriptionHeader">{header}</h2>
                <p data-test="descriptionSlogan">
                    {slogan}
                </p>
                <h3>Today's Recruiting Officer:</h3>
                <ul>
                    <li data-test="recruiterfName">First Name: {recruiter[0].fName}</li>
                    <li data-test="recruiterlName">Last Name: {recruiter[0].lName}</li>
                </ul>
            </div>
       )
    }
}

//define propTypes for Headline. Note the lower case p
Details.propTypes = {
    header: PropTypes.string,
    slogan: PropTypes.string,
    recruiter: PropTypes.arrayOf(PropTypes.shape({
        fName: PropTypes.string,
        lName: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number,
        onlineStatus: PropTypes.bool
    }))
}

export default Details;