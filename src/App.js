import React from 'react';
import Todo from './todo';
import {  Route ,Switch } from 'react-router-dom';
import About from './components/about';
import Home from './components/home';
import Link1 from './components/link';
import './App.css';
import './todo';


class App extends React.Component{
  // state={
  //   counter:0
  // }
  //  value=(event)=>{
  //   let ainput_value = event.target.value;
  //   this.setState({counter:ainput_value});
  // }
  
  render(){
    // input_value=this.state.counter;
    return (
      <div className="back"><h1 className="back">Todo</h1>
      <Link1/>
      <Switch>
        <Route exact path="/" component={Home}/>
      <Route exact path="/todos" component={Todo}/>
      <Route exact path="/about" component={About}/>
    </Switch>
    </div>
    );
    }
  }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Waah! katai <code>Gajab</code> Ekdm Zeher 
//         </p>
//         <a
//           className="App-link"
//           href="https://csichitkara.club"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Lets Roll!
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
