import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Toggle from './Toggle';
import hand from './handNoBg.png';

const baseList = [
  {
    name: 'On Naturals',
    hex: '#FFA500',
    price: '10',
    objectID: 0,
  },
  {
    name: 'Extensions',
    hex: '#b0e0e6',
    price: '20',
    objectID: 1,
  },
];

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
    name: 'Grey',
    hex: '#f6f6f6',
    price: '25',
    objectID: 2,
  },
  {
    name: 'Red',
    hex: '#FFA500',
    price: '5',
    objectID: 3,
  },
  {
    name: 'Green',
    hex: '#b0e0e6',
    price: '20',
    objectID: 4,
  },
  {
    name: 'Pink',
    hex: '#f6f6f6',
    price: '25',
    objectID: 5,
  },
  {
    name: 'Purple',
    hex: '#f6f6f6',
    price: '25',
    objectID: 6,
  },
  {
    name: 'Yellow',
    hex: '#FFA500',
    price: '5',
    objectID: 7,
  },
  {
    name: 'Brown',
    hex: '#b0e0e6',
    price: '20',
    objectID: 8,
  },
  {
    name: 'Black',
    hex: '#f6f6f6',
    price: '25',
    objectID: 9,
  },
];

const shapeList = [
  {
    name: 'Square',
    hex: '#FFA500',
    price: '10',
    objectID: 0,
  },
  {
    name: 'Round',
    hex: '#b0e0e6',
    price: '20',
    objectID: 1,
  },
  {
    name: 'Squoval',
    hex: '#FFA500',
    price: '10',
    objectID: 2,
  },
  {
    name: 'Oval',
    hex: '#b0e0e6',
    price: '20',
    objectID: 3,
  },
  {
    name: 'Almond',
    hex: '#FFA500',
    price: '10',
    objectID: 4,
  },
  {
    name: 'Stiletto',
    hex: '#b0e0e6',
    price: '20',
    objectID: 5,
  },
  {
    name: 'Ballerina',
    hex: '#FFA500',
    price: '10',
    objectID: 6,
  },
  {
    name: 'Lipstick',
    hex: '#b0e0e6',
    price: '20',
    objectID: 7,
  },
  {
    name: 'Flare',
    hex: '#FFA500',
    price: '10',
    objectID: 8,
  },
  {
    name: 'Edge',
    hex: '#b0e0e6',
    price: '20',
    objectID: 9,
  },
  {
    name: 'Arrowhead',
    hex: '#FFA500',
    price: '10',
    objectID: 10,
  },
  {
    name: 'Mountain Peak',
    hex: '#b0e0e6',
    price: '20',
    objectID: 11,
  },
];


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      baseList: baseList,
      chosenBase: "",
      colourList: colourList,
      chosenColour: "",
      length: "",
    }

    this.onPick = this.onPick.bind(this);
    this.onLengthChange = this.onLengthChange.bind(this);
  }

  onPick(colour) {
    this.setState({ chosenColour: colour }, () => console.log(this.state.chosenColour));
    // CREATE A NEW LOCAL STATE OF PRICE, THEN IN THIS PICK FUNCTION PUT THE SELECTED OBJECTS PRICE IN THE PRICE STATE. ALSO ADD A IF STATEMENT IN THIS FUNCTION, TO DIFFERENTIATE BETWEEN A COLOUR CHOICE AND THE BASE CHOICE
  }

  onLengthChange(event) {
    this.setState({ length: event.target.value }, () => console.log(this.state.length));
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
                    list={baseList}
                    onPick={this.onPick}
                         />}
                  <button onClick={toggle}>Base</button>
                </div>
              )}
            </Toggle>
            <Toggle>
              {({ on, toggle }) => (
                <div className="sideBar">
                  {on && <Table
                    list={colourList}
                    onPick={this.onPick}
                         />}
                  <button onClick={toggle}>Colours</button>
                </div>
              )}
            </Toggle>
            <Toggle>
              {({ on, toggle }) => (
                <div className="sideBar">
                  {on && <Table
                    list={shapeList}
                    onPick={this.onPick}
                         />}
                  <button onClick={toggle}>Shape</button>
                </div>
              )}
            </Toggle>
            <Toggle>
              {({ on, toggle }) => (
                <div className="sideBar">
                  {on &&
                    <div className="slidecontainer">
                      <input type="range" onChange={this.onLengthChange} step="1" min="1" max="20" value={this.state.value}></input>
                      <p>Value: <span id="demo">{this.state.length}</span></p>
                    </div>
                  }
                  <button onClick={toggle}>Length</button>
                </div>
              )}
            </Toggle>
          </div>

          <Visualise
            // base={chosenBase}
            colour={chosenColour}
          ></Visualise>


          <Cost price={chosenColour.price}>
            { chosenColour
              ? <h3 id="total">Total</h3>
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
    const { onPick, list } = this.props;
    return (
      <div>
        {list.map(pick =>
          <Button onClick={() => onPick(pick)} type="button" key={pick.objectID} className="colBox">
            <span>
              <div className="colourPeak" style={{ backgroundColor: pick.hex }}></div>
            </span>
            <span>
              <br/>{pick.name}
            </span>
          </Button>
        )}
      </div>
    );
  }
}

class Visualise extends Component {
  render() {
    // const { chosenColour } = this.props;
    return (
      <div className="visualiser">
        <img src={hand} id="handPic" height="750px" alt="hand-plain"/>

      </div>
    );
  }
}

class Cost extends Component {
  render() {
    const { price, children } = this.props;
    return (
      <div className="bottomBar">
        <div id="price">
          {children}£{price}
        </div>
        <img src={logo} id="logo" width="75em" alt="logo"/>
      </div>
    );
  }
}

const Button = ({ onClick, className = '', children }) =>
	  <button
	    onClick={onClick}
	    className={className}
	    type="button"
   >

	    {children}
	  </button>



export default App;
