import React, { Component } from 'react';
import './App.css';

const colourList = [
  {
    name: 'Orange Princess',
    hex: '#FFA500',
    price: '5',
    objectID: 0,
  },
  {
    name: 'Michelle',
    hex: '#b0e0e6',
    price: '20',
    objectID: 1,
  },
  {
    name: 'grey',
    hex: '#f6f6f6',
    price: '25',
    objectID: 2,
  },
];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      colourList: colourList,
      chosenColour: "",
    }

    this.onColourPick = this.onColourPick.bind(this);
  }

  onColourPick(colour) {
    this.setState({ chosenColour: colour }, () => console.log(this.state.chosenColour));

  }

  render() {

    return (
      <div className="App">
        {colourList.map(colour =>
          <button key={colour.objectID} onClick={() => this.onColourPick(colour)} type="button" className="colBox">
            <span>
              <div className="colourPeak" style={{ backgroundColor: colour.hex }}></div>
            </span>
            <span>
              <br/>{colour.name}
            </span>
          </button>
        )}
      </div>
    );
  }
}


export default App;
