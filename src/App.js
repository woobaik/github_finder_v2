import React from 'react';
import Navbar from './components/layout/Navbar'
import Users from './components/user/Users'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/about/About'
import './App.css';

class App extends React.Component {

  render() {


    return (
      <Router>
        <div className="App">
          <Navbar title='Github Finder' />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Users} />
              <Route exact path='/about' component={About} />
            </Switch>

          </div>
        </div>
      </Router>
    );
  }

}

export default App;
