import React from 'react';
import './button.css'
export default class Button extends React.Component
    {
        
        render(){
            return(<button onClick={this.props.addToList} className="button">{this.props.name}</button>
                );
        }
    }
    
