import React, { Component } from 'react';
import './App.css';
import Toggle from './Toggle';

const colourList = [
  {
    name: 'BIAB',
    hex: '#FFA500',
    price: '5',
    objectID: 0,
  },
  {
    name: 'Hard Gel',
    hex: '#b0e0e6',
    price: '20',
    objectID: 1,
  },
  {
    name: 'Acrylic',
    hex: '#f6f6f6',
    price: '25',
    objectID: 2,
  },
  {
    name: 'BIAB',
    hex: '#FFA500',
    price: '5',
    objectID: 3,
  },
  {
    name: 'Hard Gel',
    hex: '#b0e0e6',
    price: '20',
    objectID: 4,
  },
  {
    name: 'Acrylic',
    hex: '#f6f6f6',
    price: '25',
    objectID: 5,
  },
  {
    name: 'Acrylic',
    hex: '#f6f6f6',
    price: '25',
    objectID: 6,
  },
  {
    name: 'BIAB',
    hex: '#FFA500',
    price: '5',
    objectID: 7,
  },
  {
    name: 'Hard Gel',
    hex: '#b0e0e6',
    price: '20',
    objectID: 8,
  },
  {
    name: 'Acrylic',
    hex: '#f6f6f6',
    price: '25',
    objectID: 9,
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
    const { colourList, chosenColour } = this.state;

    return (
      <div className="App">
        <div className="interactions">
          <div className="sideBarContainer">
            <Toggle>
              {({ on, toggle }) => (
                <div className="sideBar">
                  {on && <Table
                    colourList={colourList}
                    onColourPick={this.onColourPick}
                         />}
                  <button onClick={toggle}>Base</button>
                </div>
              )}
            </Toggle>
            <Toggle>
              {({ on, toggle }) => (
                <div className="sideBar">
                  {on && <h2>hi</h2>}
                  <button onClick={toggle}>Colours</button>
                </div>
              )}
            </Toggle>
            <Toggle>
              {({ on, toggle }) => (
                <div className="sideBar">
                  {on && <h2>hi</h2>}
                  <button onClick={toggle}>Shape</button>
                </div>
              )}
            </Toggle>
            <Toggle>
              {({ on, toggle }) => (
                <div className="sideBar">
                  {on && <h2>hi</h2>}
                  <button onClick={toggle}>Length</button>
                </div>
              )}
            </Toggle>
          </div>


          <Cost price={chosenColour.price}>
            { chosenColour
              ? <h3>Total</h3>
              : null
            }
          </Cost>

        </div>
      </div>
    );
  }
}

class Table extends Component {
  render() {
    const { onColourPick } = this.props;
    return (
      <div>
        {colourList.map(colour =>
          <button key={colour.objectID} onClick={() => onColourPick(colour)} type="button" className="colBox">
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

class Cost extends Component {
  render() {
    const { price, children } = this.props;
    return (
      <div className="bottomBar">
        {children}£{price}
      </div>
    );
  }
}



export default App;
