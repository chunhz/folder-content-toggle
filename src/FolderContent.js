import React, { Component } from "react";

class FolderContent extends Component {
  constructor(props){
    super(props)
    this.state = { toggle: false }
  }
  toggle = (event) => {
    this.state.toggle ?
    this.setState({toggle: false}) : 
    this.setState({toggle: true})
  }
  render(){
    return (
      <div>
      {
  this.state.toggle ?
  <div>
  <h1>Home</h1>
  <button onClick = {this.toggle}>Toggle</button>
  <ul>
    <li>File 1</li>
    <li>File 2</li>
    <li>File 3</li>
  </ul>
  </div> : 
    <div>
    <h1>Home</h1>
    <button onClick = {this.toggle}>Toggle</button>
    </div>
}
        
      </div>
    );
  }
}

export default FolderContent;
