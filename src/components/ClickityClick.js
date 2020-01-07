// Code ClickityClick Component Here
import React from "react";
import React from "react";
import ReactDOM from "react-dom";

import ClickityClick from "./components/ClickityClick";

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }

  handleClick = () => {
    // Update our state here...
    this.setState(
      {
        hasBeenClicked: true
      },
      () => console.log(this.state.hasBeenClicked)
    );
  };

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;

ReactDOM.render(<ClickityClick />, document.getElementById("root"));
