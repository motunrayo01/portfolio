import React, {Component} from 'react';
import profile from './assets/profile.png'

class Front extends Component {
    componentDidMount() {
        this.timerID = setInterval(
          () => this.clock(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
      clock() {
        this.setState({
          date: new Date()
        });
      }
    
    render (){
        return (
            <div>
                <pre> -------------------------------------------</pre>
                <h2 className="clock"> {new Date().toLocaleTimeString()}.</h2>
                <p> Okunniga Mary Omolola </p>
                <pre> -------------------------------------------</pre>
                <h2> Portfolio </h2>
                <div className='App'>
        
                <img src={profile} alt='profile' />
                </div>
            </div>
            
           
        )
        
    }
}
export default Front;