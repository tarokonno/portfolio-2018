import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
            <div className="row">
              <div className="col-md-3 header">
                <Header />
              </div>
              <div className="col-md-9 content">
                <Main />
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
