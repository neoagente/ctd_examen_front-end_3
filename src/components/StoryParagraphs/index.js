import React, { Component } from 'react';
import "./styles.css";
import dataJson from "../data.json";
import Options from "../Options"


class StoryParagraphs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataJson,
      nextOption: ""
    };
  }

  onChangeRadio = (e) => {
    this.setState({ nextOption: e.target.dataset.value })
  }

  render(){


    let options = Object.keys(this.props.options).map(item => {
      return (
        <div>
          <Options 
            option= {this.props.options[item]} 
            onChange= {this.onChangeRadio}
          />
        </div>
      
      )
    })
    
 
    return (
      <div>
        <div className="text">
          {this.props.text}
        </div>
        <div className="options">
          {options}
        </div>
       
      </div>
    );
  }
}

export default StoryParagraphs;