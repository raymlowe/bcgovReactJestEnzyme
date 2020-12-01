import React, { Component} from 'react';
import Header from './components/header';
import Details from './components/details';
import Chooser from './components/chooser';


//Lets for Second Test
let recruiter = [{
  fName: 'Darth',
  lName: 'Vader',
  email: 'yourFriend@recruiting.com',
  age: 85,
  onlineStatus: true
}]

let title = "Imperial Recruiting Office"
let slogan = "Han Shot Second"


class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Details header={title} slogan={slogan} recruiter={recruiter}/>
        <Chooser/>
      </div>
    )
  };
}

export default App;
