import React, {Component} from 'react';
import profile from './assets/profile.png';





class App extends Component {
    /*constructor(){
        super();
       state={displayBio:false};
       this.toggleDisplayBio=this.toggleDisplayBio.bind(this);
    */ 
         state={displayBio:false};
        toggleDisplayBio=() =>{
            this.setState({displayBio:!this.state.displayBio});
        }
      
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
                <div className="Front" style={{float:"left", width:"50%", textAlign:"center",  }}>
              
                <h2 className="clock"> {new Date().toLocaleTimeString()}.</h2>
                <h1> Okunniga Mary Omolola </h1>
                <pre> -------------------------------------------</pre>
                <h2> Portfolio </h2>
                <div className="image">
                <img src={profile} alt='profile' style={{height: "300px", width: "30%",borderRadius: "30px",}} />
                </div>
                </div>

                 <div className="bio" style={{float:"right", width:"50%", textAlign:"center" }}>
                 <h1> Hello!</h1>
                <pre> ______________________________________________________________________</pre>
                <p> My name is Omolola. I'm a software engineer. </p>
                <p> I'm always looking forward to working on meaningful projects. </p>
                <pre> ______________________________________________________________________</pre>
          
                {
                    this.state.displayBio ?(
                          <div> 
                            <p> I live in Lagos, and i code everyday.</p>
                            <p> My favourite language is Javascript, and i think react.js is awesome. </p>
                            <p> Beside coding, i also love reading books and cooking </p>
                            <pre> ______________________________________________________________________</pre>
                            
                           
                            <button onMouseOver={this.toggleDisplayBio}> show less </button>
                        </div>    
                        ): (
                            <div> 
                            <button onMouseOver={this.toggleDisplayBio} > Read More </button> 
                            </div> 
                        )
                        
                      
                        
                }
                
                </div>
              </div>
        )
        
    }
    
}

export default App;