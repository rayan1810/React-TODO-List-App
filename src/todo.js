import React from 'react';
import Text from './components/input/input';
import Button from './components/button/button';
import List from './components/list/list';
import './todo.css';

export default class Todo extends React.Component{
    state={
        todos:[],    
        value : ""
      }
    
      onChangeInput = (event)=>
      {
        this.setState({ value: event.target.value });
      }
    
      onClick = ()=>
      {
        let todos = this.state.todos;
        todos.push(this.state.value);
        this.setState({todos: todos, value:""});
      }
    render(){
        let todos = this.state.todos;
    let value = this.state.value;
        
        return(

            <div className="back">
                <div className="top">
                    <Text placeholder="Enter Task"
                    getValue={this.onChangeInput}
                    value={value}/>
                    <Button name="Add to list" addToList={this.onClick}/>
                </div>
                <br></br><br></br>
                <div className="list">
                   <List array={todos}/>
                </div>
            </div>
        );
    }
}