import React, { Component } from 'react';
import "./styles.css";
import dataJson from "../data.json";
import StoryParagraphs from "../StoryParagraphs";


class TextStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataJson,
      nextOption: null,
    };
  }

componentDidMount() {

    
}


  render(){

    let story = this.state.data.filter(item=> item.id === "1").map(item =>
        <StoryParagraphs
            key={item.id} 
            text={item.historia} 
            options={item.opciones} 
            onReload={this.reloadStory} 
            onOptionSubmit={this.getNextParagraph} 
        />
    )
    

    return (
      <div  className="container">
        <h1>Elige tu propia aventura</h1>
        {story}
        <button type="button" className="netxbut">NEXT</button>
      </div>
    );
  }
}

export default TextStory;