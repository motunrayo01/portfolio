import React, {Component} from 'react';
import {ProgressBar} from 'react-bootstrap';

class Users extends Component{
  render(){
    return (
      <div> 
         
           <h2> SKILLS </h2>
              
             
                <p> Front End Design </p>
                <ul>
                  <li> Proficient use of HTML and CSS  <ProgressBar variant="success" animated now={97}/> </li> <br/>
                  <li> Proficient use of css framework (bootstrap) </li> <ProgressBar variant="success" animated now={97}/> <br/>
                  <li> Proficient use of css Javascript </li> <ProgressBar variant="success" animated now={70}/> <br/>
                  <li> Proficient use of Javascript framework (React)</li>  <ProgressBar variant="success"  animated now={50}/><br/>
                 
                  
                  </ul> 
                
                
            
      </div>
    )
  }
}


export default Users;

