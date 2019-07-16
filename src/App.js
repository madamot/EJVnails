import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Toggle from './Toggle';
import hand from './handNoBg.png';
import images from './images';

const baseList = [
  {
    name: 'On Naturals',
    class: 'base',
    hex: '#FFA500',
    price: '10',
    objectID: 0,
  },
  {
    name: 'Extensions',
    class: 'base',
    hex: '#b0e0e6',
    price: '20',
    objectID: 1,
  },
];

const colourList = [
  {
    name: 'Orange Princess',
    class: 'colour',
    hex: '#FFA500',
    price: '5',
    objectID: 0,
  },
  {
    name: 'Michelle',
    class: 'colour',
    hex: '#b0e0e6',
    price: '20',
    objectID: 1,
  },
  {
    name: 'Grey',
    class: 'colour',
    hex: '#f6f6f6',
    price: '25',
    objectID: 2,
  },
  {
    name: 'Red',
    class: 'colour',
    hex: '#FFA500',
    price: '5',
    objectID: 3,
  },
  {
    name: 'Green',
    class: 'colour',
    hex: '#b0e0e6',
    price: '20',
    objectID: 4,
  },
  {
    name: 'Pink',
    class: 'colour',
    hex: '#f6f6f6',
    price: '25',
    objectID: 5,
  },
  {
    name: 'Purple',
    class: 'colour',
    hex: '#f6f6f6',
    price: '25',
    objectID: 6,
  },
  {
    name: 'Yellow',
    class: 'colour',
    hex: '#FFA500',
    price: '5',
    objectID: 7,
  },
  {
    name: 'Brown',
    class: 'colour',
    hex: '#b0e0e6',
    price: '20',
    objectID: 8,
  },
  {
    name: 'Black',
    class: 'colour',
    hex: '#f6f6f6',
    price: '25',
    objectID: 9,
  },
];

const shapeList = [
  {
    name: 'Square',
    class: 'shape',
    hex: '#FFA500',
    price: '10',
    objectID: 0,
  },
  {
    name: 'Round',
    class: 'shape',
    hex: '#b0e0e6',
    price: '20',
    objectID: 1,
  },
  {
    name: 'Squoval',
    class: 'shape',
    hex: '#FFA500',
    price: '10',
    objectID: 2,
  },
  {
    name: 'Oval',
    class: 'shape',
    hex: '#b0e0e6',
    price: '20',
    objectID: 3,
  },
  {
    name: 'Almond',
    class: 'shape',
    hex: '#FFA500',
    price: '10',
    objectID: 4,
  },
  {
    name: 'Stiletto',
    class: 'shape',
    hex: '#b0e0e6',
    price: '20',
    objectID: 5,
  },
  {
    name: 'Ballerina',
    class: 'shape',
    hex: '#FFA500',
    price: '10',
    objectID: 6,
  },
  {
    name: 'Coffin',
    class: 'shape',
    hex: '#b0e0e6',
    price: '20',
    objectID: 7,
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
      shapeList: shapeList,
      chosenShape: "",
      length: "",
      handChoice: "",
      price: "",
    }

    this.onPick = this.onPick.bind(this);
    this.onLengthChange = this.onLengthChange.bind(this);
  }

  onPick(pick) {
    switch (pick.class) {
      case 'base':
          this.setState({ chosenBase: pick }, () => console.log(this.state.chosenBase));
        break;
      case 'colour':
          this.setState({ chosenColour: pick }, () => console.log(this.state.chosenColour));
        break;
      case 'shape':
          this.setState({ chosenShape: pick }, () => console.log(this.state.chosenShape));
        break;
      default:
        console.log('Issue setting ' + pick + 'to the state.');

    }

    // CREATE A NEW LOCAL STATE OF PRICE, THEN IN THIS PICK FUNCTION PUT THE SELECTED OBJECTS PRICE IN THE PRICE STATE. ALSO ADD A IF STATEMENT IN THIS FUNCTION, TO DIFFERENTIATE BETWEEN A COLOUR CHOICE AND THE BASE CHOICE
  }

  onLengthChange(event) {
    this.setState({ length: event.target.value }, () => console.log(this.state.length));
  }


  render() {
    const { chosenColour, chosenBase, chosenShape } = this.state;

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

          {/* <Canvas /> */}

          <Visualise
            // base={chosenBase}
            colour={chosenColour}>

          </Visualise>




          <Cost price={chosenBase.price + chosenColour.price + chosenShape.price}>
            { chosenColour || chosenBase || chosenShape
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


//     class Canvas extends Component {
//
// componentDidMount() {
//     this.updateCanvas();
// }
//
// updateCanvas() {
//     const ctx = this.refs.canvas.getContext('2d');
//
//     const imageObj1 = new Image();
//     imageObj1.src = {hand};
//     console.log(imageObj1);
//
//     imageObj1.onload = function() {
//         ctx.drawImage(imageObj1,0,0);
//
// }
//
// }
// render() {
//     return (
//
//
//         <canvas ref="canvas" width={300} height={900}> </canvas>
//
//     );
//  }
// };





export default App;
