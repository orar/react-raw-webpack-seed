// @flow
import React, { Component } from 'react';
import './App.scss';

type Props = {

}

/**
*
* @author Orar
* @date   12/19/18, 10:01 PM
*/
class App extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className="AppContainer">
        <h1 className="futureText">Hello Future, Im coming for you!</h1>
      </div>
    );
  }
}


export default App;
