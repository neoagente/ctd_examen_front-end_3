import React from 'react';
import "./styles.css";

function Options(props) {

    return (
    
        <div className="radio-button">
            <input type="radio" value={props.option} name="nextext" onChange={props.onChange} /> 
            <span>{props.option}</span>
        </div>
    );

}

export default Options;