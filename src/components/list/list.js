import React from 'react';
const style={
    backgroundColor : "black",
    color: "white"
  }
  export default function List(props) 
    {
        
        return(
            <div>
      {
        props.array.map((todo)=>
        {
          return <li>{todo}</li>
        })
      }
    </div>
            )
        }
    
    
