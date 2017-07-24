import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Clock from './Components/Clock.js';
import MenuPopover from './Components/menuPopover.js';



// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);



function Welcome(props) {
  return <h2>Hello, {props.name}</h2>;
}


class App extends React.Component {
  render() {
    return (
     <MuiThemeProvider>
        <div className="App">
            <div className="App-header">
            
            <h2>Welcome to React!</h2>
            
            <Welcome name="Susan" />
            <Clock />
            <Clock />
            <Clock />
            <MenuPopover />
            </div>
            <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

