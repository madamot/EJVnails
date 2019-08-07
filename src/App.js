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
    hex: '#afb5b6',
    natural: '/Assets/hand_n_snowqueen.png',
    square: '/Assets/hand_e_snowqueen_square.png',
    round: '/Assets/hand_e_snowqueen_round.png',
    stiletto: '/Assets/hand_e_snowqueen_stiletto.png',
    price: 5,
    objectID: 0,
  },
  {
    name: 'Nightclub',
    class: 'colour',
    hex: '#dddddf',
    natural: '/Assets/hand_n_nightclub.png',
    square: '/Assets/hand_e_nightclub_square.png',
    round: '/Assets/hand_e_nightclub_round.png',
    stiletto: '/Assets/hand_e_nightclub_stiletto.png',
    price: 20,
    objectID: 1,
  },
  {
    name: 'Rose Gold',
    class: 'colour',
    hex: '#caad93',
    natural: '/Assets/hand_n_rosegold.png',
    square: '/Assets/hand_e_rosegold_square.png',
    round: '/Assets/hand_e_rosegold_round.png',
    stiletto: '/Assets/hand_e_rosegold_stiletto.png',
    price: 25,
    objectID: 2,
  },
  {
    name: 'Daisy',
    class: 'colour',
    hex: '#f2f2f2',
    natural: '/Assets/hand_n_daisy.png',
    square: '/Assets/hand_e_daisy_square.png',
    round: '/Assets/hand_e_daisy_round.png',
    stiletto: '/Assets/hand_e_daisy_stiletto.png',
    price: 5,
    objectID: 3,
  },
  {
    name: 'J01',
    class: 'colour',
    hex: '#dec3ba',
    natural: '/Assets/hand_n_j01.png',
    square: '/Assets/hand_e_j01_square.png',
    round: '/Assets/hand_e_j01_round.png',
    stiletto: '/Assets/hand_e_j01_stiletto.png',
    price: 20,
    objectID: 4,
  },
  {
    name: 'Fluffy Cotton',
    class: 'colour',
    hex: '#e7ddd7',
    natural: '/Assets/hand_n_fluffycotton.png',
    square: '/Assets/hand_e_fluffycotton_square.png',
    round: '/Assets/hand_e_fluffycotton_round.png',
    stiletto: '/Assets/hand_e_fluffycotton_stiletto.png',
    price: 25,
    objectID: 5,
  },
  {
    name: 'Diana',
    class: 'colour',
    hex: '#cfccda',
    natural: '/Assets/hand_n_diana.png',
    square: '/Assets/hand_e_diana_square.png',
    round: '/Assets/hand_e_diana_round.png',
    stiletto: '/Assets/hand_e_diana_stiletto.png',
    price: 25,
    objectID: 6,
  },
  {
    name: 'Dolly',
    class: 'colour',
    hex: '#e6c9bf',
    natural: '/Assets/hand_n_dolly.png',
    square: '/Assets/hand_e_dolly_square.png',
    round: '/Assets/hand_e_dolly_round.png',
    stiletto: '/Assets/hand_e_dolly_stiletto.png',
    price: 5,
    objectID: 7,
  },
  {
    name: 'Pina Colada',
    class: 'colour',
    hex: '#dbcecd',
    natural: '/Assets/hand_n_pinacolada.png',
    square: '/Assets/hand_e_pinacolada_square.png',
    round: '/Assets/hand_e_pinacolada_round.png',
    stiletto: '/Assets/hand_e_pinacolada_stiletto.png',
    price: 20,
    objectID: 8,
  },
  {
    name: 'Eve',
    class: 'colour',
    hex: '#b59f96',
    natural: '/Assets/naturals_snowqueen.png',
    square: '/Assets/hand_e_eve_square.png',
    round: '/Assets/hand_e_eve_round.png',
    stiletto: '/Assets/hand_e_eve_stiletto.png',
    price: 25,
    objectID: 9,
  },
  {
    name: 'Gossip',
    class: 'colour',
    hex: '#e9dce5',
    natural: '/Assets/naturals_snowqueen.png',
    square: '/Assets/hand_e_gossip_square.png',
    round: '/Assets/hand_e_gossip_round.png',
    stiletto: '/Assets/hand_e_gossip_stiletto.png',
    price: 25,
    objectID: 10,
  },
  {
    name: 'V07',
    class: 'colour',
    hex: '#f2deda',
    natural: '/Assets/naturals_snowqueen.png',
    square: '/Assets/hand_e_v07_square.png',
    round: '/Assets/hand_e_v07_round.png',
    stiletto: '/Assets/hand_e_v07_stiletto.png',
    price: 25,
    objectID: 11,
  },
  {
    name: 'Teddy',
    class: 'colour',
    hex: '#dbaca6',
    natural: '/Assets/naturals_snowqueen.png',
    square: '/Assets/hand_e_teddy_square.png',
    round: '/Assets/hand_e_teddy_round.png',
    stiletto: '/Assets/hand_e_teddy_stiletto.png',
    price: 25,
    objectID: 12,
  },
  {
    name: 'Baby',
    class: 'colour',
    hex: '#dcadbe',
    natural: '/Assets/naturals_snowqueen.png',
    square: '/Assets/hand_e_baby_square.png',
    round: '/Assets/hand_e_baby_round.png',
    stiletto: '/Assets/hand_e_baby_stiletto.png',
    price: 25,
    objectID: 13,
  },
  {
    name: 'June',
    class: 'colour',
    hex: '#e7cfe2',
    natural: '/Assets/naturals_snowqueen.png',
    square: '/Assets/hand_e_june_square.png',
    round: '/Assets/hand_e_june_round.png',
    stiletto: '/Assets/hand_e_june_stiletto.png',
    price: 25,
    objectID: 14,
  },
  {
    name: 'Marilyn',
    class: 'colour',
    hex: '#e7b6d0',
    natural: '/Assets/naturals_snowqueen.png',
    square: '/Assets/hand_e_marilyn_square.png',
    round: '/Assets/hand_e_marilyn_round.png',
    stiletto: '/Assets/hand_e_marilyn_stiletto.png',
    price: 25,
    objectID: 15,
  },
  {
    name: 'Hollywood Star',
    class: 'colour',
    hex: '#a65d95',
    natural: '/Assets/naturals_snowqueen.png',
    square: '/Assets/hand_e_hollywoodstar_square.png',
    round: '/Assets/hand_e_hollywoodstar_round.png',
    stiletto: '/Assets/hand_e_hollywoodstar_stiletto.png',
    price: 25,
    objectID: 16,
  },
  {
    name: 'Pink Panther',
    class: 'colour',
    hex: '#f0a9d2',
    natural: '/Assets/naturals_snowqueen.png',
    square: '/Assets/hand_e_pinkpanther_square.png',
    round: '/Assets/hand_e_pinkpanther_round.png',
    stiletto: '/Assets/hand_e_pinkpanther_stiletto.png',
    price: 25,
    objectID: 17,
  },
  {
    name: 'Waterlilly',
    class: 'colour',
    hex: '#eb637b',
    natural: '/Assets/naturals_snowqueen.png',
    square: '/Assets/hand_e_waterlilly_square.png',
    round: '/Assets/hand_e_waterlilly_round.png',
    stiletto: '/Assets/hand_e_waterlilly_stiletto.png',
    price: 25,
    objectID: 18,
  },
  {
    name: 'Gilly',
    class: 'colour',
    hex: '#e860a0',
    natural: '/Assets/naturals_snowqueen.png',
    square: '/Assets/hand_e_gilly_square.png',
    round: '/Assets/hand_e_gilly_round.png',
    stiletto: '/Assets/hand_e_gilly_stiletto.png',
    price: 25,
    objectID: 19,
  },
  {
    name: 'Angel Wing',
    class: 'colour',
    hex: '#e04053',
    natural: '/Assets/naturals_snowqueen.png',
    square: '/Assets/hand_e_angelwing_square.png',
    round: '/Assets/hand_e_angelwing_round.png',
    stiletto: '/Assets/hand_e_angelwing_stiletto.png',
    price: 25,
    objectID: 21,
  },
  {
    name: 'Flirting Again',
    class: 'colour',
    hex: '#892678',
    natural: '/Assets/hand_n_flirtingagain.png',
    square: '/Assets/hand_e_flirtingagain_square.png',
    round: '/Assets/hand_e_flirtingagain_round.png',
    stiletto: '/Assets/hand_e_flirtingagain_stiletto.png',
    price: 25,
    objectID: 22,
  },
  {
    name: 'Miami',
    class: 'colour',
    hex: '#c13492',
    natural: '/Assets/hand_n_flirtingagain.png',
    square: '/Assets/hand_e_miami_square.png',
    round: '/Assets/hand_e_miami_round.png',
    stiletto: '/Assets/hand_e_miami_stiletto.png',
    price: 25,
    objectID: 23,
  },
  {
    name: 'Hot Lips',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_hotlips.png',
    square: '/Assets/hand_e_hotlips_square.png',
    round: '/Assets/hand_e_hotlips_round.png',
    stiletto: '/Assets/hand_e_hotlips_stiletto.png',
    price: 25,
    objectID: 24,
  },
  {
    name: 'Twiggy',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_twiggy.png',
    square: '/Assets/hand_e_twiggy_square.png',
    round: '/Assets/hand_e_twiggy_round.png',
    stiletto: '/Assets/hand_e_twiggy_stiletto.png',
    price: 25,
    objectID: 25,
  },
  {
    name: 'Peach',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_peach.png',
    square: '/Assets/hand_e_peach_square.png',
    round: '/Assets/hand_e_peach_round.png',
    stiletto: '/Assets/hand_e_peach_stiletto.png',
    price: 25,
    objectID: 26,
  },
  {
    name: 'Coral Touch',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_coraltouch.png',
    square: '/Assets/hand_e_coraltouch_square.png',
    round: '/Assets/hand_e_coraltouch_round.png',
    stiletto: '/Assets/hand_e_coraltouch_stiletto.png',
    price: 25,
    objectID: 27,
  },
  {
    name: 'Sunshine',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_sunshine.png',
    square: '/Assets/hand_e_sunshine_square.png',
    round: '/Assets/hand_e_sunshine_round.png',
    stiletto: '/Assets/hand_e_sunshine_stiletto.png',
    price: 25,
    objectID: 28,
  },
  {
    name: 'Orange Princess',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_orangeprincess.png',
    square: '/Assets/hand_e_orangeprincess_square.png',
    round: '/Assets/hand_e_orangeprincess_round.png',
    stiletto: '/Assets/hand_e_orangeprincess_stiletto.png',
    price: 25,
    objectID: 29,
  },
  {
    name: 'Peach Daiquiri',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_peachdaiquiri.png',
    square: '/Assets/hand_e_peachdaiquiri_square.png',
    round: '/Assets/hand_e_peachdaiquiri_round.png',
    stiletto: '/Assets/hand_e_peachdaiquiri_stiletto.png',
    price: 25,
    objectID: 30,
  },
  {
    name: 'Pastel v005',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_pastelv005.png',
    square: '/Assets/hand_e_pastelv005_square.png',
    round: '/Assets/hand_e_pastelv005_round.png',
    stiletto: '/Assets/hand_e_pastelv005_stiletto.png',
    price: 25,
    objectID: 31,
  },
  {
    name: 'Pastel v082',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_pastelv082.png',
    square: '/Assets/hand_e_pastelv082_square.png',
    round: '/Assets/hand_e_pastelv082_round.png',
    stiletto: '/Assets/hand_e_pastelv082_stiletto.png',
    price: 25,
    objectID: 32,
  },
  {
    name: 'Blue Marine',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_bluemarine.png',
    square: '/Assets/hand_e_bluemarine_square.png',
    round: '/Assets/hand_e_bluemarine_round.png',
    stiletto: '/Assets/hand_e_bluemarine_stiletto.png',
    price: 25,
    objectID: 33,
  },
  {
    name: 'Michelle',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_michelle.png',
    square: '/Assets/hand_e_michelle_square.png',
    round: '/Assets/hand_e_michelle_round.png',
    stiletto: '/Assets/hand_e_michelle_stiletto.png',
    price: 25,
    objectID: 34,
  },
  {
    name: 'Pastel v110',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_pastelv110.png',
    square: '/Assets/hand_e_pastelv110_square.png',
    round: '/Assets/hand_e_pastelv110_round.png',
    stiletto: '/Assets/hand_e_pastelv110_stiletto.png',
    price: 25,
    objectID: 35,
  },
  {
    name: 'Serena',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_serena.png',
    square: '/Assets/hand_e_serena_square.png',
    round: '/Assets/hand_e_serena_round.png',
    stiletto: '/Assets/hand_e_serena_stiletto.png',
    price: 25,
    objectID: 36,
  },
  {
    name: 'Candy',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_candy.png',
    square: '/Assets/hand_e_candy_square.png',
    round: '/Assets/hand_e_candy_round.png',
    stiletto: '/Assets/hand_e_candy_stiletto.png',
    price: 25,
    objectID: 37,
  },
  {
    name: 'Crimson Charm',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_crimsoncharm.png',
    square: '/Assets/hand_e_crimsoncharm_square.png',
    round: '/Assets/hand_e_crimsoncharm_round.png',
    stiletto: '/Assets/hand_e_crimsoncharm_stiletto.png',
    price: 25,
    objectID: 38,
  },
  {
    name: 'Belladonna',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_belladonna.png',
    square: '/Assets/hand_e_belladonna_square.png',
    round: '/Assets/hand_e_belladonna_round.png',
    stiletto: '/Assets/hand_e_belladonna_stiletto.png',
    price: 25,
    objectID: 39,
  },
  {
    name: 'Bonfire',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_bonfire.png',
    square: '/Assets/hand_e_bonfire_square.png',
    round: '/Assets/hand_e_bonfire_round.png',
    stiletto: '/Assets/hand_e_bonfire_stiletto.png',
    price: 25,
    objectID: 40,
  },
  {
    name: 'Velvet Red',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_velvetred.png',
    square: '/Assets/hand_e_velvetred_square.png',
    round: '/Assets/hand_e_velvetred_round.png',
    stiletto: '/Assets/hand_e_velvetred_stiletto.png',
    price: 25,
    objectID: 41,
  },
  {
    name: 'Jam',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_jam.png',
    square: '/Assets/hand_e_jam_square.png',
    round: '/Assets/hand_e_jam_round.png',
    stiletto: '/Assets/hand_e_jam_stiletto.png',
    price: 25,
    objectID: 42,
  },
  {
    name: 'Cacao',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_cacao.png',
    square: '/Assets/hand_e_cacao_square.png',
    round: '/Assets/hand_e_cacao_round.png',
    stiletto: '/Assets/hand_e_cacao_stiletto.png',
    price: 25,
    objectID: 43,
  },
  {
    name: 'Impulsive',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_impulsive.png',
    square: '/Assets/hand_e_impulsive_square.png',
    round: '/Assets/hand_e_impulsive_round.png',
    stiletto: '/Assets/hand_e_impulsive_stiletto.png',
    price: 25,
    objectID: 44,
  },
  {
    name: 'Deepest Mauve',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_deepestmauve.png',
    square: '/Assets/hand_e_deepestmauve_square.png',
    round: '/Assets/hand_e_deepestmauve_round.png',
    stiletto: '/Assets/hand_e_deepestmauve_stiletto.png',
    price: 25,
    objectID: 45,
  },
  {
    name: 'Berrylicious',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_berrylicious.png',
    square: '/Assets/hand_e_berrylicious_square.png',
    round: '/Assets/hand_e_berrylicious_round.png',
    stiletto: '/Assets/hand_e_berrylicious_stiletto.png',
    price: 25,
    objectID: 46,
  },
  {
    name: 'Cosmos',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_cosmos.png',
    square: '/Assets/hand_e_cosmos_square.png',
    round: '/Assets/hand_e_cosmos_round.png',
    stiletto: '/Assets/hand_e_cosmos_stiletto.png',
    price: 25,
    objectID: 47,
  },
  {
    name: 'Heartless',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_heartless.png',
    square: '/Assets/hand_e_heartless_square.png',
    round: '/Assets/hand_e_heartless_round.png',
    stiletto: '/Assets/hand_e_heartless_stiletto.png',
    price: 25,
    objectID: 48,
  },
  {
    name: 'N094',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_n094.png',
    square: '/Assets/hand_e_n094_square.png',
    round: '/Assets/hand_e_n094_round.png',
    stiletto: '/Assets/hand_e_n094_stiletto.png',
    price: 25,
    objectID: 49,
  },
  {
    name: 'Brittany',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_brittany.png',
    square: '/Assets/hand_e_brittany_square.png',
    round: '/Assets/hand_e_brittany_round.png',
    stiletto: '/Assets/hand_e_brittany_stiletto.png',
    price: 25,
    objectID: 50,
  },
  {
    name: 'Shadow',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_shadow.png',
    square: '/Assets/hand_e_shadow_square.png',
    round: '/Assets/hand_e_shadow_round.png',
    stiletto: '/Assets/hand_e_shadow_stiletto.png',
    price: 25,
    objectID: 51,
  },
  {
    name: 'Jumanji',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_jumanji.png',
    square: '/Assets/hand_e_jumanji_square.png',
    round: '/Assets/hand_e_jumanji_round.png',
    stiletto: '/Assets/hand_e_jumanji_stiletto.png',
    price: 25,
    objectID: 52,
  },
  {
    name: 'Thermo 4',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_thermo4.png',
    square: '/Assets/hand_e_thermo4_square.png',
    round: '/Assets/hand_e_thermo4_round.png',
    stiletto: '/Assets/hand_e_thermo4_stiletto.png',
    price: 25,
    objectID: 53,
  },
  {
    name: 'Jungle',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_jungle.png',
    square: '/Assets/hand_e_jungle_square.png',
    round: '/Assets/hand_e_jungle_round.png',
    stiletto: '/Assets/hand_e_jungle_stiletto.png',
    price: 25,
    objectID: 54,
  },
  {
    name: 'Galaxy',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_galaxy.png',
    square: '/Assets/hand_e_galaxy_square.png',
    round: '/Assets/hand_e_galaxy_round.png',
    stiletto: '/Assets/hand_e_galaxy_stiletto.png',
    price: 25,
    objectID: 55,
  },
  {
    name: 'Royal Navy',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_royalnavy.png',
    square: '/Assets/hand_e_royalnavy_square.png',
    round: '/Assets/hand_e_royalnavy_round.png',
    stiletto: '/Assets/hand_e_royalnavy_stiletto.png',
    price: 25,
    objectID: 56,
  },
  {
    name: 'Nightfall',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_nightfall.png',
    square: '/Assets/hand_e_nightfall_square.png',
    round: '/Assets/hand_e_nightfall_round.png',
    stiletto: '/Assets/hand_e_nightfall_stiletto.png',
    price: 25,
    objectID: 57,
  },
  {
    name: 'Jet Black',
    class: 'colour',
    hex: '#f6f6f6',
    natural: '/Assets/hand_n_jetblack.png',
    square: '/Assets/hand_e_jetblack_square.png',
    round: '/Assets/hand_e_jetblack_round.png',
    stiletto: '/Assets/hand_e_jetblack_stiletto.png',
    price: 25,
    objectID: 58,
  },
];

const shapeList = [
  {
    name: 'Square',
    class: 'shape',
    hex: '#FFA500',
    standard: '/Assets/hand_e1.png',
    e_shape_SQ: '/Assets/hand_e_snowqueen.png',
    e_shape_NC: '/Assets/hand_e_nightclub.png',
    price: 10,
    objectID: 0,
  },
  {
    name: 'Round',
    class: 'shape',
    hex: '#b0e0e6',
    standard: '/Assets/hand_e_round.png',
    e_shape_SQ: '/Assets/hand_e_round_snowqueen.png',
    price: 20,
    objectID: 1,
  },
  // {
  //   name: 'Squoval',
  //   class: 'shape',
  //   hex: '#FFA500',
  //   price: 10,
  //   objectID: 2,
  // },
  // {
  //   name: 'Almond',
  //   class: 'shape',
  //   hex: '#FFA500',
  //   price: 10,
  //   objectID: 4,
  // },
  {
    name: 'Stiletto',
    class: 'shape',
    hex: '#b0e0e6',
    standard: '/Assets/hand_e_stiletto.png',
    e_shape_SQ: '/Assets/hand_e_stiletto_snowqueen.png',
    e_shape_NC: '/Assets/hand_e_stiletto_nightclub.png',
    price: 20,
    objectID: 5,
  },
  // {
  //   name: 'Ballerina/\nCoffin',
  //   class: 'shape',
  //   hex: '#FFA500',
  //   e_shape_SQ: '/Assets/hand_e_coffin_snowqueen.png',
  //   price: 10,
  //   objectID: 6,
  // },
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
      case 'shape':
          this.setState({ chosenShape: pick }, () => console.log(this.state.chosenShape));
          if (this.state.chosenBase.style === 'extensions') {
            this.setState({ handChoice: pick.standard }, () => console.log(this.state.handChoice));
          } else if (this.state.chosenBase.style === 'natural') {
            this.setState({ handChoice: pick.natural }, () => console.log(this.state.handChoice));
          }
        break;
      case 'colour':
      this.setState({ chosenColour: pick }, () => console.log(this.state.chosenShape));
        if (this.state.chosenBase.style === 'extensions') {
          switch (this.state.chosenShape.name) {
            case 'Square':
                this.setState({ handChoice: pick.square });
              break;
            case 'Round':
                this.setState({ handChoice: pick.round });
              break;
            case 'Stiletto':
                this.setState({ handChoice: pick.stiletto });
              break;
            default:
              console.log('Issue setting ' + pick + 'to the state.');
          }
        }
        else {
          this.setState({ handChoice: pick.natural });
        }
        break;
      default:
        console.log('Issue setting ' + pick + 'to the state.');
    }
  }

  // onPick(pick) {
  //   switch (pick.class) {
  //     case 'base':
  //         this.setState({ chosenBase: pick, handChoice: pick.handChoice }, () => console.log(this.state.chosenBase));
  //       break;
  //     case 'colour':
  //         this.setState({ chosenColour: pick }, () => console.log(this.state.chosenColour));
  //         if (this.state.chosenBase.style === 'extensions') {
  //           this.setState({ handChoice: pick.handChoiceExtensions }, () => console.log(this.state.handChoice));
  //         } else if (this.state.chosenBase.style === 'natural') {
  //           this.setState({ handChoice: pick.handChoiceNatural }, () => console.log(this.state.handChoice));
  //         }
  //
  //       break;
  //     case 'shape':
  //         this.setState({ chosenShape: pick }, () => console.log(this.state.chosenShape));
  //         if (this.state.chosenBase.style === 'extensions') {
  //           switch (this.state.chosenColour.name) {
  //             case 'Snow Queen':
  //                 this.setState({ handChoice: pick.e_shape_SQ });
  //               break;
  //             case 'Nightclub':
  //                 this.setState({ handChoice: pick.e_shape_NC });
  //               break;
  //             case 'Rose Gold':
  //                 this.setState({ handChoice: pick.e_shape_RG });
  //               break;
  //             default:
  //               console.log('Issue setting ' + pick + 'to the state.');
  //           }
  //         }
  //       break;
  //     default:
  //       console.log('Issue setting ' + pick + 'to the state.');
  //   }
  //
  //   // CREATE A NEW LOCAL STATE OF PRICE, THEN IN THIS PICK FUNCTION PUT THE SELECTED OBJECTS PRICE IN THE PRICE STATE. ALSO ADD A IF STATEMENT IN THIS FUNCTION, TO DIFFERENTIATE BETWEEN A COLOUR CHOICE AND THE BASE CHOICE
  // }

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
            { this.state.chosenBase.style === 'natural'
              ? null
              : <Toggle>
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
            }
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
            { this.state.chosenBase.style === 'natural'
              ? null
              :  <Toggle>
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
            }
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
