import React from 'react';
const style={
    backgroundColor : "black",
    color: "white"
  }

  class Text extends React.Component
  {
      
      render(){
          return(<input value={this.props.value} style={style} placeholder={this.props.placeholder} onChange={this.props.getData}></input>
              );
      }
  }
export class Text;  
