import React, {Component, useState} from 'react';
import PROJECTS from './data/projects';
import background from './assets/background.jpeg';
import {Carousel} from 'react-bootstrap';
import { render } from '@testing-library/react';


class Project extends Component{
    render(){
        const { Title,Description, Link, Image} = this.props.project;
        return (
         //   <div> {this.props.project.Description}</div>
            <div className='projects'> 
               <p> {Title} </p>
                <img src={Image} alt='profile' style={{wdth: 350, height:120}}></img>
                <p> {Description} </p>
                <a href={Link}> {Link}</a>

            </div>

        )
    }
}

class Projects extends Component{
    render(){
        
        return (
            <div>
                <marquee width="80%" scrollamount="5" direction="left" loop="infinity"> <h2> Highlighted projects </h2> </marquee>
                <div> 
                    {PROJECTS.map (PROJECTS => {
                        return (
                            <Project key={PROJECTS.id} project={PROJECTS}/>
                        );
                    }
                    )
                    }
                </div>
                
                
                 </div>
        )
    }
}



export default Projects;