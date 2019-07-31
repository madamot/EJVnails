import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Toggle from './Toggle';

const baseList = [
  {
    name: 'On Naturals',
    class: 'base',
    hex: '#FFA500',
    style: 'natural',
    handChoice: '/Assets/hand_n1.png',
    price: 10,
    objectID: 0,
  },
  {
    name: 'Extensions',
    class: 'base',
    hex: '#b0e0e6',
    style: 'extensions',
    handChoice: '/Assets/hand_e1.png',
    price: 20,
    objectID: 1,
  },
];

const colourList = [
  {
    name: 'Snow Queen',
    class: 'colour',
    hex: '#FFA500',
    handChoiceNatural: '/Assets/hand_n_snowqueen.png',
    handChoiceExtensions: '/Assets/hand_e_snowqueen.png',
    e_shapeStiletto: '/Assets/hand_e_stiletto_snowqueen.png',
    price: 5,
    objectID: 0,
  },
  {
    name: 'Nightclub',
    class: 'colour',
    hex: '#b0e0e6',
    handChoiceNatural: '/Assets/naturals_snowqueen.png',
    handChoiceExtensions: '/Assets/hand_e_nightclub.png',
    price: 20,
    objectID: 1,
  },
  {
    name: 'Rose Gold',
    class: 'colour',
    hex: '#f6f6f6',
    handChoiceNatural: '/Assets/naturals_snowqueen.png',
    handChoiceExtensions: '/Assets/hand_e_rosegold.png',
    price: 25,
    objectID: 2,
  },
  {
    name: 'Daisy',
    class: 'colour',
    hex: '#FFA500',
    handChoiceNatural: '/Assets/naturals_snowqueen.png',
    handChoiceExtensions: '/Assets/hand_e_daisy.png',
    price: 5,
    objectID: 3,
  },
  {
    name: 'J01',
    class: 'colour',
    hex: '#b0e0e6',
    handChoiceNatural: '/Assets/naturals_snowqueen.png',
    handChoiceExtensions: '/Assets/hand_e_j01.png',
    price: 20,
    objectID: 4,
  },
  {
    name: 'Fluffy Cotton',
    class: 'colour',
    hex: '#f6f6f6',
    handChoiceNatural: '/Assets/naturals_snowqueen.png',
    handChoiceExtensions: '/Assets/hand_e_fluffycotton.png',
    price: 25,
    objectID: 5,
  },
  {
    name: 'Diana',
    class: 'colour',
    hex: '#f6f6f6',
    handChoiceNatural: '/Assets/naturals_snowqueen.png',
    handChoiceExtensions: '/Assets/hand_e_diana.png',
    price: 25,
    objectID: 6,
  },
  {
    name: 'Dolly',
    class: 'colour',
    hex: '#FFA500',
    handChoiceNatural: '/Assets/naturals_snowqueen.png',
    handChoiceExtensions: '/Assets/hand_e_dolly.png',
    price: 5,
    objectID: 7,
  },
  {
    name: 'Pina Colada',
    class: 'colour',
    hex: '#b0e0e6',
    handChoiceNatural: '/Assets/naturals_snowqueen.png',
    handChoiceExtensions: '/Assets/hand_e_pinacolada.png',
    price: 20,
    objectID: 8,
  },
  {
    name: 'Eve',
    class: 'colour',
    hex: '#f6f6f6',
    handChoiceNatural: '/Assets/naturals_snowqueen.png',
    handChoiceExtensions: '/Assets/hand_e_eve.png',
    price: 25,
    objectID: 9,
  },
  {
    name: 'Gossip',
    class: 'colour',
    hex: '#f6f6f6',
    handChoiceNatural: '/Assets/naturals_snowqueen.png',
    handChoiceExtensions: '/Assets/hand_e_gossip.png',
    price: 25,
    objectID: 10,
  },
  {
    name: 'V07',
    class: 'colour',
    hex: '#f6f6f6',
    handChoiceNatural: '/Assets/naturals_snowqueen.png',
    handChoiceExtensions: '/Assets/hand_e_v07.png',
    price: 25,
    objectID: 11,
  },
  {
    name: 'Teddy',
    class: 'colour',
    hex: '#f6f6f6',
    handChoiceNatural: '/Assets/naturals_snowqueen.png',
    handChoiceExtensions: '/Assets/hand_e_teddy.png',
    price: 25,
    objectID: 12,
  },
  {
    name: 'Baby',
    class: 'colour',
    hex: '#f6f6f6',
    handChoiceNatural: '/Assets/naturals_snowqueen.png',
    handChoiceExtensions: '/Assets/hand_e_baby.png',
    price: 25,
    objectID: 13,
  },
  {
    name: 'June',
    class: 'colour',
    hex: '#f6f6f6',
    handChoiceNatural: '/Assets/naturals_snowqueen.png',
    handChoiceExtensions: '/Assets/hand_e_june.png',
    price: 25,
    objectID: 14,
  },
  {
    name: 'Marilyn',
    class: 'colour',
    hex: '#f6f6f6',
    handChoiceNatural: '/Assets/naturals_snowqueen.png',
    handChoiceExtensions: '/Assets/hand_e_marilyn.png',
    price: 25,
    objectID: 15,
  },
  {
    name: 'Hollywood Star',
    class: 'colour',
    hex: '#f6f6f6',
    handChoiceNatural: '/Assets/naturals_snowqueen.png',
    handChoiceExtensions: '/Assets/hand_e_hollywoodstar.png',
    price: 25,
    objectID: 16,
  },
  {
    name: 'Pink Panther',
    class: 'colour',
    hex: '#f6f6f6',
    handChoiceNatural: '/Assets/naturals_snowqueen.png',
    handChoiceExtensions: '/Assets/hand_e_pinkpanther.png',
    price: 25,
    objectID: 17,
  },
  {
    name: 'Waterlilly',
    class: 'colour',
    hex: '#f6f6f6',
    handChoiceNatural: '/Assets/naturals_snowqueen.png',
    handChoiceExtensions: '/Assets/hand_e_waterlily.png',
    price: 25,
    objectID: 18,
  },
  {
    name: 'Gilly',
    class: 'colour',
    hex: '#f6f6f6',
    handChoiceNatural: '/Assets/naturals_snowqueen.png',
    handChoiceExtensions: '/Assets/hand_e_gilly.png',
    price: 25,
    objectID: 19,
  },
  {
    name: 'Angel Wing',
    class: 'colour',
    hex: '#f6f6f6',
    handChoiceNatural: '/Assets/naturals_snowqueen.png',
    handChoiceExtensions: '/Assets/hand_e_angelwing.png',
    price: 25,
    objectID: 21,
  },
  {
    name: 'Flirting Again',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 22,
  },
  {
    name: 'Miami',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 23,
  },
  {
    name: 'Hot Lips',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 24,
  },
  {
    name: 'Twiggy',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 25,
  },
  {
    name: 'Peach',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 26,
  },
  {
    name: 'Coral Touch',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 27,
  },
  {
    name: 'Sunshine',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 28,
  },
  {
    name: 'Orange Princess',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 29,
  },
  {
    name: 'Peach Daiquiri',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 30,
  },
  {
    name: 'Pastel v005',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 31,
  },
  {
    name: 'Pastel v082',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 32,
  },
  {
    name: 'Blue Marine',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 33,
  },
  {
    name: 'Michelle',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 34,
  },
  {
    name: 'Pastel v110',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 35,
  },
  {
    name: 'Serena',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 36,
  },
  {
    name: 'Candy',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 37,
  },
  {
    name: 'Crimson Charm',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 38,
  },
  {
    name: 'Belladonna',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 39,
  },
  {
    name: 'Bonfire',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 40,
  },
  {
    name: 'Velvet Red',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 41,
  },
  {
    name: 'Jam',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 42,
  },
  {
    name: 'Cacao',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 43,
  },
  {
    name: 'Impulsive',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 44,
  },
  {
    name: 'Deepest Mauve',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 45,
  },
  {
    name: 'Berrylicious',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 46,
  },
  {
    name: 'Cosmos',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 47,
  },
  {
    name: 'Heartless',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 48,
  },
  {
    name: 'N094',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 49,
  },
  {
    name: 'Brittany',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 50,
  },
  {
    name: 'Shadow',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 51,
  },
  {
    name: 'Jumanji',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 52,
  },
  {
    name: 'Thermo 4',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 53,
  },
  {
    name: 'Jungle',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 54,
  },
  {
    name: 'Galaxy',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 55,
  },
  {
    name: 'Royal Navy',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 56,
  },
  {
    name: 'Nightfall',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 57,
  },
  {
    name: 'Jet Black',
    class: 'colour',
    hex: '#f6f6f6',
    price: 25,
    objectID: 58,
  },
];

const shapeList = [
  {
    name: 'Square',
    class: 'shape',
    hex: '#FFA500',
    e_shape_SQ: '/Assets/hand_e_snowqueen.png',
    price: 10,
    objectID: 0,
  },
  {
    name: 'Round',
    class: 'shape',
    hex: '#b0e0e6',
    e_shape_SQ: '/Assets/hand_e_round_snowqueen.png',
    price: 20,
    objectID: 1,
  },
  {
    name: 'Squoval',
    class: 'shape',
    hex: '#FFA500',
    price: 10,
    objectID: 2,
  },
  {
    name: 'Almond',
    class: 'shape',
    hex: '#FFA500',
    price: 10,
    objectID: 4,
  },
  {
    name: 'Stiletto',
    class: 'shape',
    hex: '#b0e0e6',
    e_shape_SQ: '/Assets/hand_e_stiletto_snowqueen.png',
    price: 20,
    objectID: 5,
  },
  {
    name: 'Ballerina/\nCoffin',
    class: 'shape',
    hex: '#FFA500',
    e_shape_SQ: '/Assets/hand_e_coffin_snowqueen.png',
    price: 10,
    objectID: 6,
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
      handChoice: "/Assets/hand_n.png",
    }

    this.onPick = this.onPick.bind(this);
    this.onLengthChange = this.onLengthChange.bind(this);
  }

  onPick(pick) {
    switch (pick.class) {
      case 'base':
          this.setState({ chosenBase: pick, handChoice: pick.handChoice }, () => console.log(this.state.chosenBase));
        break;
      case 'colour':
          this.setState({ chosenColour: pick }, () => console.log(this.state.chosenColour));
          if (this.state.chosenBase.style === 'extensions') {
            this.setState({ handChoice: pick.handChoiceExtensions }, () => console.log(this.state.handChoice));
          } else if (this.state.chosenBase.style === 'natural') {
            this.setState({ handChoice: pick.handChoiceNatural }, () => console.log(this.state.handChoice));
          }

        break;
      case 'shape':
          this.setState({ chosenShape: pick }, () => console.log(this.state.chosenShape));
          if (this.state.chosenBase.style === 'extensions') {
            switch (this.state.chosenColour.name) {
              case 'Snow Queen':
                  this.setState({ handChoice: pick.e_shape_SQ });
                break;
              case 'colour':

                break;
              case 'shape':

                break;
              default:
                console.log('Issue setting ' + pick + 'to the state.');
            }
          }
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
    const { chosenColour, chosenBase, chosenShape, handChoice } = this.state;

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
                  {!on && <h1 className="label">1</h1>}
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
                  {!on && <h1 className="label">2</h1>}
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
                  {!on && <h1 className="label">3</h1>}
                </div>
              )}
            </Toggle>
            <Toggle>
              {({ on, toggle }) => (
                <div className="sideBar">
                  {on &&
                    <div className="slidecontainer">
                      <input type="range" onChange={this.onLengthChange} step="1" min="1" max="5" value={this.state.value}></input>
                      <p>Value: <span id="demo">{this.state.length}</span></p>
                    </div>
                  }
                  <button onClick={toggle}>Length</button>
                  {!on && <h1 className="label">4</h1>}
                </div>
              )}
            </Toggle>
          </div>


          <Visualise
            // base={chosenBase}
            display={handChoice}>

          </Visualise>




          <Cost price={chosenBase.price + chosenColour.price + chosenShape.price}>
            { chosenBase
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
          <Button onClick={() => onPick(pick)} type="radio" key={pick.objectID} className="colBox">
            <span>
              <div className="colourPeak" style={{ backgroundColor: pick.hex }}></div>
            </span>
            <span>
              <br/>{pick.name}
              <br/>
              <br/>£{pick.price}
            </span>
          </Button>
        )}
      </div>
    );
  }
}

class Visualise extends Component {
  render() {
    const { display } = this.props;
    return (
      <div className="visualiser">
        <img src={ display } id="handPic" height="750px" alt="hand-plain"/>

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
	    type="radio"
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
