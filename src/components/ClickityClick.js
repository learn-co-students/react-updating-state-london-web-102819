// Code ClickityClick Component Here
import React, {Component} from 'react';

class ClickityClick extends Component {
    state = {
        hasBeenClicked: false 
    }
    
    handleClick = (e) => {
        /* updating based on the previous state: 
            Due to asynchrnous nature, it is best to avoid using this.state inside of setSate.
             In situations where there are many state changes being made, if we use this.state inside a setState, 
             it is possible that the values in state are changed by a different setState just prior to our setState.
        
        👇 example: abstract logics that involve this.state outside of setState()     */
        let status = !this.state.hasBeenClicked;
        this.setState({
            hasBeenClicked: status
        } //, () => console.log(this.state.hasBeenClicked)  // 👈 setState() takes 2 argumets, the 2nd can be a callback function. 
            // this callback function will fire once the state has been updated,
            // which allows testing/debugging around the asynchronous nature of how setState() works. 
        )
        // console.log(this.state.hasBeenClicked)
    }
    // 👇 Another solution for handling updating state based on previous state:
    /*
    handleClick = (e) => {
        this.setState(previousState => {
            return {
                hasBeenClicked: !previousState.hasBeenClicked
            }
        })
    }
    */
    render(){
        return (
            <div>
                <p> I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}> Click Me!</button>
            </div>
        );
    }
}


export default ClickityClick