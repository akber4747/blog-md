import React, { Component } from 'react';

import { Toolbar, ToolbarTitle, NavigationDrawer, ListItem } from 'react-md';
import logo from '../logo.svg';
import '../App.css';

const navItems = [{
  label: 'Folder 1'
},
  {label: 'Folder 2'
},
  {label: 'Folder 3'
},
  {label: 'Folder 4'
}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationDrawer
          navItems={navItems.map(props => <ListItem {...props} primaryText={props.label} key={props.label} />)}
          toolbarTitle="Blog App"

        >

        <Toolbar 
          className="App-intro"
          >
        </Toolbar>
        </NavigationDrawer>

      </div>
    );
  }
} 

export default App;
