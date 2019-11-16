import React from 'react';
import './input.css'
export default class Text extends React.Component
    {
        
        render(){
            return(<input onChange={this.props.getValue} value={this.props.value} className="input" placeholder={this.props.placeholder} ></input>
                );
        }
    }
    
