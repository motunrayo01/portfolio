import React, {Component} from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component{
    render(){
        const {  Link, Image, Number} = this.props.socialProfiles;
        return (
         //   <div> {this.props.project.Description}</div>
            <div style={{display:'inline-block', width:150, margin:10}}> 
               <p>{Number}</p>
                <a href={Link}><img src={Image} alt='profile' style={{width: 60, height:50, display:'inline'}}/></a> <br/>
                
                
            </div>

        )
    }
}

class SocialProfiles extends Component{
    render(){
        return (
            <div>
                 <pre> _________________________________________________________________________</pre>
                <h2> Contact me! </h2>
                <div> 
                    {SOCIAL_PROFILES.map (SOCIAL_PROFILE => {
                        return (
                            <SocialProfile key={SOCIAL_PROFILES.id} socialProfiles={SOCIAL_PROFILE}/>
                
                        );
                    }
                    )
                    }
                </div>
                
                
                 </div>
        )
    }
}

export default SocialProfiles;