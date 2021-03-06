import React, { Component } from 'react';
import './Customiser.css';
import logoApp from '../../logo.svg';
import Toggle from '../../Toggle';
import ReactGA from 'react-ga';
import { NavLink } from "react-router-dom";
import Popup from "reactjs-popup";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';
import extensionsStiletto from '../../extensions-icon.svg';
import extensionsSquare from '../../extensions-icon-square.svg';
import extensionsRound from '../../extensions-icon-round.svg';
import extensions from '../../extensions-icon.svg';
import biab from '../../biab-icon.svg';
import naturals from '../../natural-icon.svg';
import hardgel from '../../hardgel-icon.svg';
ReactGA.initialize('UA-145398669-1');
ReactGA.pageview(window.location.pathname + window.location.search);


const baseList = [
  {
    name: 'On Naturals',
    group: 'base',
    style: 'natural',
    icon: naturals,
    handChoice: '/Assets/hand_n1.png',
    price: 0,
    objectID: 0,
  },
  {
    name: 'Extensions',
    group: 'base',
    style: 'extensions',
    icon: extensions,
    handChoice: '/Assets/hand_e1.png',
    price: 0,
    objectID: 1,
  },
];

const materialListExtensions = [
  {
    name: 'BIAB',
    group: 'material',
    icon: biab,
    style: 'natural',
    handChoice: '/Assets/hand_n1.png',
    price: 10,
    objectID: 0,
  },
  {
    name: 'Hard Gel',
    group: 'material',
    icon: hardgel,
    style: 'extensions',
    handChoice: '/Assets/hand_e1.png',
    price: 13,
    objectID: 1,
  },
];

const materialListNaturals = [
  {
    name: '2-in-1 Base',
    group: 'material',
    hex: '#FFA500',
    style: 'natural',
    handChoice: '/Assets/hand_n1.png',
    price: 0,
    objectID: 0,
  },
  {
    name: 'Rubber Base Coat',
    group: 'material',
    hex: '#FFA500',
    style: 'natural',
    handChoice: '/Assets/hand_n1.png',
    price: 2,
    objectID: 1,
  },
  {
    name: 'BIAB Overlay',
    group: 'material',
    icon: biab,
    style: 'natural',
    handChoice: '/Assets/hand_n1.png',
    price: 3,
    objectID: 2,
  },
];

const colourList = [
  {
    name: 'Snow Queen',
    group: 'colour',
    hex: '#afb5b6',
    natural: '/Assets/hand_n_snowqueen.png',
    square: '/Assets/hand_e_snowqueen_square.png',
    round: '/Assets/hand_e_snowqueen_round.png',
    stiletto: '/Assets/hand_e_snowqueen_stiletto.png',
    price: 22,
    objectID: 0,
  },
  {
    name: 'Nightclub',
    group: 'colour',
    hex: '#dddddf',
    natural: '/Assets/hand_n_nightclub.png',
    square: '/Assets/hand_e_nightclub_square.png',
    round: '/Assets/hand_e_nightclub_round.png',
    stiletto: '/Assets/hand_e_nightclub_stiletto.png',
    price: 22,
    objectID: 1,
  },
  {
    name: 'Rose Gold',
    group: 'colour',
    hex: '#caad93',
    natural: '/Assets/hand_n_rosegold.png',
    square: '/Assets/hand_e_rosegold_square.png',
    round: '/Assets/hand_e_rosegold_round.png',
    stiletto: '/Assets/hand_e_rosegold_stiletto.png',
    price: 22,
    objectID: 2,
  },
  {
    name: 'Daisy',
    group: 'colour',
    hex: '#f2f2f2',
    natural: '/Assets/hand_n_daisy.png',
    square: '/Assets/hand_e_daisy_square.png',
    round: '/Assets/hand_e_daisy_round.png',
    stiletto: '/Assets/hand_e_daisy_stiletto.png',
    price: 22,
    objectID: 3,
  },
  {
    name: 'J01',
    group: 'colour',
    hex: '#dec3ba',
    natural: '/Assets/hand_n_j01.png',
    square: '/Assets/hand_e_j01_square.png',
    round: '/Assets/hand_e_j01_round.png',
    stiletto: '/Assets/hand_e_j01_stiletto.png',
    price: 22,
    objectID: 4,
  },
  {
    name: 'Fluffy Cotton',
    group: 'colour',
    hex: '#e7ddd7',
    natural: '/Assets/hand_n_fluffycotton.png',
    square: '/Assets/hand_e_fluffycotton_square.png',
    round: '/Assets/hand_e_fluffycotton_round.png',
    stiletto: '/Assets/hand_e_fluffycotton_stiletto.png',
    price: 22,
    objectID: 5,
  },
  {
    name: 'Diana',
    group: 'colour',
    hex: '#cfccda',
    natural: '/Assets/hand_n_diana.png',
    square: '/Assets/hand_e_diana_square.png',
    round: '/Assets/hand_e_diana_round.png',
    stiletto: '/Assets/hand_e_diana_stiletto.png',
    price: 22,
    objectID: 6,
  },
  {
    name: 'Dolly',
    group: 'colour',
    hex: '#e6c9bf',
    natural: '/Assets/hand_n_dolly.png',
    square: '/Assets/hand_e_dolly_square.png',
    round: '/Assets/hand_e_dolly_round.png',
    stiletto: '/Assets/hand_e_dolly_stiletto.png',
    price: 22,
    objectID: 7,
  },
  {
    name: 'Pina Colada',
    group: 'colour',
    hex: '#dbcecd',
    natural: '/Assets/hand_n_pinacolada.png',
    square: '/Assets/hand_e_pinacolada_square.png',
    round: '/Assets/hand_e_pinacolada_round.png',
    stiletto: '/Assets/hand_e_pinacolada_stiletto.png',
    price: 22,
    objectID: 8,
  },
  {
    name: 'Eve',
    group: 'colour',
    hex: '#b59f96',
    natural: '/Assets/hand_n_eve.png',
    square: '/Assets/hand_e_eve_square.png',
    round: '/Assets/hand_e_eve_round.png',
    stiletto: '/Assets/hand_e_eve_stiletto.png',
    price: 22,
    objectID: 9,
  },
  {
    name: 'Gossip',
    group: 'colour',
    hex: '#e9dce5',
    natural: '/Assets/hand_n_gossip.png',
    square: '/Assets/hand_e_gossip_square.png',
    round: '/Assets/hand_e_gossip_round.png',
    stiletto: '/Assets/hand_e_gossip_stiletto.png',
    price: 22,
    objectID: 10,
  },
  {
    name: 'V07',
    group: 'colour',
    hex: '#f2deda',
    natural: '/Assets/hand_n_v07.png',
    square: '/Assets/hand_e_v07_square.png',
    round: '/Assets/hand_e_v07_round.png',
    stiletto: '/Assets/hand_e_v07_stiletto.png',
    price: 22,
    objectID: 11,
  },
  {
    name: 'Teddy',
    group: 'colour',
    hex: '#dbaca6',
    natural: '/Assets/hand_n_teddy.png',
    square: '/Assets/hand_e_teddy_square.png',
    round: '/Assets/hand_e_teddy_round.png',
    stiletto: '/Assets/hand_e_teddy_stiletto.png',
    price: 22,
    objectID: 12,
  },
  {
    name: 'French Bloom',
    group: 'colour',
    hex: '#dcadbe',
    natural: '/Assets/hand_n_baby.png',
    square: '/Assets/hand_e_baby_square.png',
    round: '/Assets/hand_e_baby_round.png',
    stiletto: '/Assets/hand_e_baby_stiletto.png',
    price: 22,
    objectID: 13,
  },
  {
    name: 'Baby',
    group: 'colour',
    hex: '#dcadbe',
    natural: '/Assets/hand_n_baby.png',
    square: '/Assets/hand_e_baby_square.png',
    round: '/Assets/hand_e_baby_round.png',
    stiletto: '/Assets/hand_e_baby_stiletto.png',
    price: 22,
    objectID: 14,
  },
  {
    name: 'Biab 18',
    group: 'colour',
    hex: '#dcadbe',
    natural: '/Assets/hand_n_baby.png',
    square: '/Assets/hand_e_baby_square.png',
    round: '/Assets/hand_e_baby_round.png',
    stiletto: '/Assets/hand_e_baby_stiletto.png',
    price: 22,
    objectID: 15,
  },
  {
    name: 'June',
    group: 'colour',
    hex: '#e7cfe2',
    natural: '/Assets/hand_n_june.png',
    square: '/Assets/hand_e_june_square.png',
    round: '/Assets/hand_e_june_round.png',
    stiletto: '/Assets/hand_e_june_stiletto.png',
    price: 22,
    objectID: 16,
  },
  {
    name: 'Marilyn',
    group: 'colour',
    hex: '#e7b6d0',
    natural: '/Assets/hand_n_marilyn.png',
    square: '/Assets/hand_e_marilyn_square.png',
    round: '/Assets/hand_e_marilyn_round.png',
    stiletto: '/Assets/hand_e_marilyn_stiletto.png',
    price: 22,
    objectID: 17,
  },
  {
    name: 'Hollywood Star',
    group: 'colour',
    hex: '#a65d95',
    natural: '/Assets/hand_n_hollywoodstar.png',
    square: '/Assets/hand_e_hollywoodstar_square.png',
    round: '/Assets/hand_e_hollywoodstar_round.png',
    stiletto: '/Assets/hand_e_hollywoodstar_stiletto.png',
    price: 22,
    objectID: 18,
  },
  {
    name: 'Pink Panther',
    group: 'colour',
    hex: '#f0a9d2',
    natural: '/Assets/hand_n_pinkpanther.png',
    square: '/Assets/hand_e_pinkpanther_square.png',
    round: '/Assets/hand_e_pinkpanther_round.png',
    stiletto: '/Assets/hand_e_pinkpanther_stiletto.png',
    price: 22,
    objectID: 19,
  },
  {
    name: 'Waterlilly',
    group: 'colour',
    hex: '#eb637b',
    natural: '/Assets/hand_n_waterlilly.png',
    square: '/Assets/hand_e_waterlilly_square.png',
    round: '/Assets/hand_e_waterlilly_round.png',
    stiletto: '/Assets/hand_e_waterlilly_stiletto.png',
    price: 22,
    objectID: 20,
  },
  {
    name: 'Gilly',
    group: 'colour',
    hex: '#e860a0',
    natural: '/Assets/hand_n_gilly.png',
    square: '/Assets/hand_e_gilly_square.png',
    round: '/Assets/hand_e_gilly_round.png',
    stiletto: '/Assets/hand_e_gilly_stiletto.png',
    price: 22,
    objectID: 21,
  },
  {
    name: 'Angel Wing',
    group: 'colour',
    hex: '#e04053',
    natural: '/Assets/hand_n_angelwing.png',
    square: '/Assets/hand_e_angelwing_square.png',
    round: '/Assets/hand_e_angelwing_round.png',
    stiletto: '/Assets/hand_e_angelwing_stiletto.png',
    price: 22,
    objectID: 22,
  },
  {
    name: 'Flirting Again',
    group: 'colour',
    hex: '#892678',
    natural: '/Assets/hand_n_flirtingagain.png',
    square: '/Assets/hand_e_flirtingagain_square.png',
    round: '/Assets/hand_e_flirtingagain_round.png',
    stiletto: '/Assets/hand_e_flirtingagain_stiletto.png',
    price: 22,
    objectID: 23,
  },
  {
    name: 'Venus',
    group: 'colour',
    hex: '#892678',
    natural: '/Assets/hand_n_flirtingagain.png',
    square: '/Assets/hand_e_flirtingagain_square.png',
    round: '/Assets/hand_e_flirtingagain_round.png',
    stiletto: '/Assets/hand_e_flirtingagain_stiletto.png',
    price: 22,
    objectID: 24,
  },
  {
    name: 'Miami',
    group: 'colour',
    hex: '#c13492',
    natural: '/Assets/hand_n_miami.png',
    square: '/Assets/hand_e_miami_square.png',
    round: '/Assets/hand_e_miami_round.png',
    stiletto: '/Assets/hand_e_miami_stiletto.png',
    price: 22,
    objectID: 25,
  },
  {
    name: 'Hot Lips',
    group: 'colour',
    hex: '#df4928',
    natural: '/Assets/hand_n_hotlips.png',
    square: '/Assets/hand_e_hotlips_square.png',
    round: '/Assets/hand_e_hotlips_round.png',
    stiletto: '/Assets/hand_e_hotlips_stiletto.png',
    price: 22,
    objectID: 26,
  },
  {
    name: 'Twiggy',
    group: 'colour',
    hex: '#ec6251',
    natural: '/Assets/hand_n_twiggy.png',
    square: '/Assets/hand_e_twiggy_square.png',
    round: '/Assets/hand_e_twiggy_round.png',
    stiletto: '/Assets/hand_e_twiggy_stiletto.png',
    price: 22,
    objectID: 27,
  },
  {
    name: 'Peach',
    group: 'colour',
    hex: '#f19f79',
    natural: '/Assets/hand_n_peach.png',
    square: '/Assets/hand_e_peach_square.png',
    round: '/Assets/hand_e_peach_round.png',
    stiletto: '/Assets/hand_e_peach_stiletto.png',
    price: 22,
    objectID: 28,
  },
  {
    name: 'Coral Touch',
    group: 'colour',
    hex: '#f0a191',
    natural: '/Assets/hand_n_coraltouch.png',
    square: '/Assets/hand_e_coraltouch_square.png',
    round: '/Assets/hand_e_coraltouch_round.png',
    stiletto: '/Assets/hand_e_coraltouch_stiletto.png',
    price: 22,
    objectID: 29,
  },
  {
    name: 'Sunshine',
    group: 'colour',
    hex: '#ec8f90',
    natural: '/Assets/hand_n_sunshine.png',
    square: '/Assets/hand_e_sunshine_square.png',
    round: '/Assets/hand_e_sunshine_round.png',
    stiletto: '/Assets/hand_e_sunshine_stiletto.png',
    price: 22,
    objectID: 30,
  },
  {
    name: 'Orange Princess',
    group: 'colour',
    hex: '#f4ba70',
    natural: '/Assets/hand_n_orangeprincess.png',
    square: '/Assets/hand_e_orangeprincess_square.png',
    round: '/Assets/hand_e_orangeprincess_round.png',
    stiletto: '/Assets/hand_e_orangeprincess_stiletto.png',
    price: 22,
    objectID: 31,
  },
  {
    name: 'Peach Daiquiri',
    group: 'colour',
    hex: '#f1a073',
    natural: '/Assets/hand_n_peachdaiquiri.png',
    square: '/Assets/hand_e_peachdaiquiri_square.png',
    round: '/Assets/hand_e_peachdaiquiri_round.png',
    stiletto: '/Assets/hand_e_peachdaiquiri_stiletto.png',
    price: 22,
    objectID: 32,
  },
  {
    name: 'Pastel v005',
    group: 'colour',
    hex: '#cac3d7',
    natural: '/Assets/hand_n_pastelv005.png',
    square: '/Assets/hand_e_pastelv005_square.png',
    round: '/Assets/hand_e_pastelv005_round.png',
    stiletto: '/Assets/hand_e_pastelv005_stiletto.png',
    price: 22,
    objectID: 33,
  },
  {
    name: 'Pastel v082',
    group: 'colour',
    hex: '#b9d8d3',
    natural: '/Assets/hand_n_pastelv082.png',
    square: '/Assets/hand_e_pastelv082_square.png',
    round: '/Assets/hand_e_pastelv082_round.png',
    stiletto: '/Assets/hand_e_pastelv082_stiletto.png',
    price: 22,
    objectID: 34,
  },
  {
    name: 'Blue Marine',
    group: 'colour',
    hex: '#b4cdde',
    natural: '/Assets/hand_n_bluemarine.png',
    square: '/Assets/hand_e_bluemarine_square.png',
    round: '/Assets/hand_e_bluemarine_round.png',
    stiletto: '/Assets/hand_e_bluemarine_stiletto.png',
    price: 22,
    objectID: 35,
  },
  {
    name: 'Michelle',
    group: 'colour',
    hex: '#b4cdde',
    natural: '/Assets/hand_n_michelle.png',
    square: '/Assets/hand_e_michelle_square.png',
    round: '/Assets/hand_e_michelle_round.png',
    stiletto: '/Assets/hand_e_michelle_stiletto.png',
    price: 22,
    objectID: 36,
  },
  {
    name: 'Pastel v110',
    group: 'colour',
    hex: '#ebdca8',
    natural: '/Assets/hand_n_pastelv110.png',
    square: '/Assets/hand_e_pastelv110_square.png',
    round: '/Assets/hand_e_pastelv110_round.png',
    stiletto: '/Assets/hand_e_pastelv110_stiletto.png',
    price: 22,
    objectID: 37,
  },
  {
    name: 'Mustard',
    group: 'colour',
    hex: '#ebdca8',
    natural: '/Assets/hand_n_pastelv110.png',
    square: '/Assets/hand_e_pastelv110_square.png',
    round: '/Assets/hand_e_pastelv110_round.png',
    stiletto: '/Assets/hand_e_pastelv110_stiletto.png',
    price: 22,
    objectID: 38,
  },
  {
    name: 'Serena',
    group: 'colour',
    hex: '#adda8b',
    natural: '/Assets/hand_n_serena.png',
    square: '/Assets/hand_e_serena_square.png',
    round: '/Assets/hand_e_serena_round.png',
    stiletto: '/Assets/hand_e_serena_stiletto.png',
    price: 22,
    objectID: 39,
  },
  {
    name: 'Candy',
    group: 'colour',
    hex: '#c73727',
    natural: '/Assets/hand_n_candy.png',
    square: '/Assets/hand_e_candy_square.png',
    round: '/Assets/hand_e_candy_round.png',
    stiletto: '/Assets/hand_e_candy_stiletto.png',
    price: 22,
    objectID: 40,
  },
  {
    name: 'Crimson Charm',
    group: 'colour',
    hex: '#cf544e',
    natural: '/Assets/hand_n_crimsoncharm.png',
    square: '/Assets/hand_e_crimsoncharm_square.png',
    round: '/Assets/hand_e_crimsoncharm_round.png',
    stiletto: '/Assets/hand_e_crimsoncharm_stiletto.png',
    price: 22,
    objectID: 41,
  },
  {
    name: 'Belladonna',
    group: 'colour',
    hex: '#8b3b36',
    natural: '/Assets/hand_n_belladonna.png',
    square: '/Assets/hand_e_belladonna_square.png',
    round: '/Assets/hand_e_belladonna_round.png',
    stiletto: '/Assets/hand_e_belladonna_stiletto.png',
    price: 22,
    objectID: 42,
  },
  {
    name: 'Bonfire',
    group: 'colour',
    hex: '#913835',
    natural: '/Assets/hand_n_bonfire.png',
    square: '/Assets/hand_e_bonfire_square.png',
    round: '/Assets/hand_e_bonfire_round.png',
    stiletto: '/Assets/hand_e_bonfire_stiletto.png',
    price: 22,
    objectID: 43,
  },
  {
    name: 'Velvet Red',
    group: 'colour',
    hex: '#553c3a',
    natural: '/Assets/hand_n_velvetred.png',
    square: '/Assets/hand_e_velvetred_square.png',
    round: '/Assets/hand_e_velvetred_round.png',
    stiletto: '/Assets/hand_e_velvetred_stiletto.png',
    price: 22,
    objectID: 44,
  },
  {
    name: 'Jam',
    group: 'colour',
    hex: '#662e28',
    natural: '/Assets/hand_n_jam.png',
    square: '/Assets/hand_e_jam_square.png',
    round: '/Assets/hand_e_jam_round.png',
    stiletto: '/Assets/hand_e_jam_stiletto.png',
    price: 22,
    objectID: 45,
  },
  {
    name: 'Cacao',
    group: 'colour',
    hex: '#84615f',
    natural: '/Assets/hand_n_cacao.png',
    square: '/Assets/hand_e_cacao_square.png',
    round: '/Assets/hand_e_cacao_round.png',
    stiletto: '/Assets/hand_e_cacao_stiletto.png',
    price: 22,
    objectID: 46,
  },
  {
    name: 'Impulsive',
    group: 'colour',
    hex: '#ad7878',
    natural: '/Assets/hand_n_impulsive.png',
    square: '/Assets/hand_e_impulsive_square.png',
    round: '/Assets/hand_e_impulsive_round.png',
    stiletto: '/Assets/hand_e_impulsive_stiletto.png',
    price: 22,
    objectID: 47,
  },
  {
    name: 'Deepest Mauve',
    group: 'colour',
    hex: '#8f7b78',
    natural: '/Assets/hand_n_deepestmauve.png',
    square: '/Assets/hand_e_deepestmauve_square.png',
    round: '/Assets/hand_e_deepestmauve_round.png',
    stiletto: '/Assets/hand_e_deepestmauve_stiletto.png',
    price: 22,
    objectID: 48,
  },
  {
    name: 'Berrylicious',
    group: 'colour',
    hex: '#9f5468',
    natural: '/Assets/hand_n_berrylicious.png',
    square: '/Assets/hand_e_berrylicious_square.png',
    round: '/Assets/hand_e_berrylicious_round.png',
    stiletto: '/Assets/hand_e_berrylicious_stiletto.png',
    price: 22,
    objectID: 49,
  },
  {
    name: 'Cosmos',
    group: 'colour',
    hex: '#dbbac2',
    natural: '/Assets/hand_n_cosmos.png',
    square: '/Assets/hand_e_cosmos_square.png',
    round: '/Assets/hand_e_cosmos_round.png',
    stiletto: '/Assets/hand_e_cosmos_stiletto.png',
    price: 22,
    objectID: 50,
  },
  {
    name: 'Heartless',
    group: 'colour',
    hex: '#794055',
    natural: '/Assets/hand_n_heartless.png',
    square: '/Assets/hand_e_heartless_square.png',
    round: '/Assets/hand_e_heartless_round.png',
    stiletto: '/Assets/hand_e_heartless_stiletto.png',
    price: 22,
    objectID: 51,
  },
  {
    name: 'N094',
    group: 'colour',
    hex: '#d5d4e1',
    natural: '/Assets/hand_n_n094.png',
    square: '/Assets/hand_e_n094_square.png',
    round: '/Assets/hand_e_n094_round.png',
    stiletto: '/Assets/hand_e_n094_stiletto.png',
    price: 22,
    objectID: 52,
  },
  {
    name: 'Brittany',
    group: 'colour',
    hex: '#888f91',
    natural: '/Assets/hand_n_brittany.png',
    square: '/Assets/hand_e_brittany_square.png',
    round: '/Assets/hand_e_brittany_round.png',
    stiletto: '/Assets/hand_e_brittany_stiletto.png',
    price: 22,
    objectID: 53,
  },
  {
    name: 'Shadow',
    group: 'colour',
    hex: '#898a8d',
    natural: '/Assets/hand_n_shadow.png',
    square: '/Assets/hand_e_shadow_square.png',
    round: '/Assets/hand_e_shadow_round.png',
    stiletto: '/Assets/hand_e_shadow_stiletto.png',
    price: 22,
    objectID: 54,
  },
  {
    name: 'Jumanji',
    group: 'colour',
    hex: '#acbba9',
    natural: '/Assets/hand_n_jumanji.png',
    square: '/Assets/hand_e_jumanji_square.png',
    round: '/Assets/hand_e_jumanji_round.png',
    stiletto: '/Assets/hand_e_jumanji_stiletto.png',
    price: 22,
    objectID: 55,
  },
  // {
  //   name: 'Thermo 4',
  //   group: 'colour',
  //   hex: '#f6f6f6',
  //   natural: '/Assets/hand_n_thermo4.png',
  //   square: '/Assets/hand_e_thermo4_square.png',
  //   round: '/Assets/hand_e_thermo4_round.png',
  //   stiletto: '/Assets/hand_e_thermo4_stiletto.png',
  //   price: 25,
  //   objectID: 56,
  // },
  {
    name: 'Jungle',
    group: 'colour',
    hex: '#3b5253',
    natural: '/Assets/hand_n_jungle.png',
    square: '/Assets/hand_e_jungle_square.png',
    round: '/Assets/hand_e_jungle_round.png',
    stiletto: '/Assets/hand_e_jungle_stiletto.png',
    price: 22,
    objectID: 57,
  },
  {
    name: 'Galaxy',
    group: 'colour',
    hex: '#514f5d',
    natural: '/Assets/hand_n_galaxy.png',
    square: '/Assets/hand_e_galaxy_square.png',
    round: '/Assets/hand_e_galaxy_round.png',
    stiletto: '/Assets/hand_e_galaxy_stiletto.png',
    price: 22,
    objectID: 58,
  },
  {
    name: 'Royal Navy',
    group: 'colour',
    hex: '#393e4b',
    natural: '/Assets/hand_n_royalnavy.png',
    square: '/Assets/hand_e_royalnavy_square.png',
    round: '/Assets/hand_e_royalnavy_round.png',
    stiletto: '/Assets/hand_e_royalnavy_stiletto.png',
    price: 22,
    objectID: 59,
  },
  {
    name: 'Nightfall',
    group: 'colour',
    hex: '#3a3d43',
    natural: '/Assets/hand_n_nightfall.png',
    square: '/Assets/hand_e_nightfall_square.png',
    round: '/Assets/hand_e_nightfall_round.png',
    stiletto: '/Assets/hand_e_nightfall_stiletto.png',
    price: 22,
    objectID: 60,
  },
  {
    name: 'Jet Black',
    group: 'colour',
    hex: '#141513',
    natural: '/Assets/hand_n_jetblack.png',
    square: '/Assets/hand_e_jetblack_square.png',
    round: '/Assets/hand_e_jetblack_round.png',
    stiletto: '/Assets/hand_e_jetblack_stiletto.png',
    price: 22,
    objectID: 61,
  },
];

const shapeList = [
  {
    name: 'Square',
    group: 'shape',
    icon: extensionsSquare,
    standard: '/Assets/hand_e1.png',
    // e_shape_SQ: '/Assets/hand_e_snowqueen.png',
    // e_shape_NC: '/Assets/hand_e_nightclub.png',
    price: 0,
    objectID: 0,
  },
  {
    name: 'Round',
    group: 'shape',
    icon: extensionsRound,
    standard: '/Assets/hand_e_round.png',
    // e_shape_SQ: '/Assets/hand_e_round_snowqueen.png',
    price: 0,
    objectID: 1,
  },
  // {
  //   name: 'Squoval',
  //   group: 'shape',
  //   hex: '#FFA500',
  //   price: 10,
  //   objectID: 2,
  // },
  // {
  //   name: 'Almond',
  //   group: 'shape',
  //   hex: '#FFA500',
  //   price: 10,
  //   objectID: 4,
  // },
  {
    name: 'Stiletto',
    group: 'shape',
    icon: extensionsStiletto,
    standard: '/Assets/hand_e_stiletto.png',
    // e_shape_SQ: '/Assets/hand_e_stiletto_snowqueen.png',
    // e_shape_NC: '/Assets/hand_e_stiletto_nightclub.png',
    price: 0,
    objectID: 5,
  },
  // {
  //   name: 'Ballerina/\nCoffin',
  //   group: 'shape',
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
      basePrice: 0,
      materialListExtensions: materialListExtensions,
      materialListNaturals: materialListNaturals,
      chosenMaterial: "",
      materialPrice: 0,
      colourList: colourList,
      chosenColour: "",
      colourPrice: 0,
      shapeList: shapeList,
      chosenShape: "",
      shapePrice: 0,
      length: "",
      handChoice: "/Assets/hand_n.png",
    }

    this.onPick = this.onPick.bind(this);
    this.onLengthChange = this.onLengthChange.bind(this);
  }

  onPick(pick) {
    switch (pick.group) {
      case 'base':
          this.setState({ chosenBase: pick, handChoice: pick.handChoice, basePrice: pick.price }, () => console.log(this.state.chosenBase));
          if (this.state.chosenColour) {
            if (this.state.chosenBase.name === 'Extensions') {
              this.setState({ handChoice: this.state.chosenColour.natural, basePrice: pick.price });
            }
            else if (this.state.chosenBase.name === 'On Naturals') {
              this.setState({ handChoice: this.state.chosenColour.square, basePrice: pick.price });
            }
          }
          if (this.state.chosenMaterial) {
            this.setState({ materialPrice: 0 })
          }
        break;
      case 'material':
          this.setState({ chosenMaterial: pick, materialPrice: pick.price }, () => console.log(this.state.chosenMaterial));
        break;
      case 'shape':
          this.setState({ chosenShape: pick, shapePrice: pick.price }, () => console.log(this.state.chosenShape));
          if (this.state.chosenBase.style === 'extensions') {
            this.setState({ handChoice: pick.standard, shapePrice: pick.price }, () => console.log(this.state.handChoice));
            if (this.state.chosenColour) {
              switch (pick.name) {
                case 'Square':
                    this.setState({ handChoice: this.state.chosenColour.square, shapePrice: pick.price });
                  break;
                case 'Round':
                    this.setState({ handChoice: this.state.chosenColour.round, shapePrice: pick.price });
                  break;
                case 'Stiletto':
                    this.setState({ handChoice: this.state.chosenColour.stiletto, shapePrice: pick.price });
                  break;
                default:
                  console.log('Issue setting ' + pick + 'to the state.');
              }
            }
          } else if (this.state.chosenBase.style === 'natural') {
            this.setState({ handChoice: pick.natural, shapePrice: pick.price }, () => console.log(this.state.handChoice));
          }
        break;
      case 'colour':
      this.setState({ chosenColour: pick, colourPrice: pick.price }, () => console.log(this.state.chosenShape));
        if (this.state.chosenBase.style === 'extensions') {
          switch (this.state.chosenShape.name) {
            case 'Square':
                this.setState({ handChoice: pick.square, colourPrice: pick.price });
              break;
            case 'Round':
                this.setState({ handChoice: pick.round, colourPrice: pick.price });
              break;
            case 'Stiletto':
                this.setState({ handChoice: pick.stiletto, colourPrice: pick.price });
              break;
            default:
              console.log('Issue setting ' + pick + 'to the state.');
          }
        }
        else {
          this.setState({ handChoice: pick.natural, colourPrice: pick.price });
        }
        break;
      default:
        console.log('Issue setting ' + pick + 'to the state.');
    }
  }

  onLengthChange(event) {
    this.setState({ length: event.target.value }, () => console.log(this.state.length));
  }

  render() {
    // eslint-disable-next-line
    const { chosenColour, chosenBase, chosenMaterial, chosenShape, handChoice, basePrice, materialPrice, shapePrice } = this.state;

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
                    <button onClick={toggle}>Type</button>
                    {!on && <h1 className="label">1</h1>}
                  </div>
                )}
              </Toggle>
              { this.state.chosenBase.style === 'extensions'
                ? <Toggle>
                  {({ on, toggle }) => (
                    <div className="sideBar">
                      {on && <Table
                        list={materialListExtensions}
                        onPick={this.onPick}
                             />}
                      <button onClick={toggle}>Base</button>
                      {!on && <h1 className="label">2</h1>}
                    </div>
                  )}
                </Toggle>
                : null
              }
              { this.state.chosenBase.style === 'natural'
                ? <Toggle>
                  {({ on, toggle }) => (
                    <div className="sideBar">
                      {on && <Table
                        list={materialListNaturals}
                        onPick={this.onPick}
                             />}
                      <button onClick={toggle}>Base</button>
                      {!on && <h1 className="label">2</h1>}
                    </div>
                  )}
                </Toggle>
                : null
              }
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
                      {!on && <h1 className="label">2</h1>}
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
                    {!on && <h1 className="label">3</h1>}
                  </div>
                )}
              </Toggle>
              {/* { this.state.chosenBase.style === 'natural'
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
              } */}
            </div>


            <Visualise
              // base={chosenBase}
              display={handChoice}>

            </Visualise>




            <Footer price={this.state.basePrice + this.state.materialPrice + this.state.shapePrice + this.state.colourPrice}>
              {
                // eslint-disable-next-line
                this.state.chosenBase.name === 'Extensions' && this.state.chosenBase && this.state.chosenMaterial && this.state.chosenShape && this.state.chosenColour || this.state.chosenBase.name === 'On Naturals' && this.state.chosenBase && this.state.chosenColour
                  ? <NavLink to="/book"><h3 id="app-button">Book an Appointment ></h3></NavLink>

                  : null
              }
              {
                // eslint-disable-next-line
                this.state.chosenBase.name === 'Extensions' && this.state.chosenBase && this.state.chosenMaterial && this.state.chosenShape && this.state.chosenColour || this.state.chosenBase.name === 'On Naturals' && this.state.chosenBase && this.state.chosenMaterial && this.state.chosenColour
                  ? <Popup trigger={<button id="share-button">Share ></button>} position="bottom center">
                    <div>
                      <div className="social-button">
                        <TwitterShareButton url={"www.ejvnails.com" + this.state.handChoice}><TwitterIcon size={32} round={true} /></TwitterShareButton>
                      </div>
                      <div className="social-button">
                        <FacebookShareButton url={"www.ejvnails.com" + this.state.handChoice}><FacebookIcon size={32} round={true} /></FacebookShareButton>
                      </div>
                      <div className="social-button">
                        <WhatsappShareButton url={"www.ejvnails.com" + this.state.handChoice} ><WhatsappIcon size={32} round={true} /></WhatsappShareButton>
                      </div>
                      <div className="social-button">
                        <EmailShareButton url={"www.ejvnails.com" + this.state.handChoice} ><EmailIcon size={32} round={true} /></EmailShareButton>
                      </div>
                    </div>
                  </Popup>

                  : null
              }
            </Footer>

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
              <div className="colourPeak" style={{ backgroundColor: pick.hex }}>
                { pick.icon
                  ? <img src={pick.icon} alt="icon" />
                  : null
                }
              </div>
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
        <img src={ display } id="handPic" height="900px" alt="hand-plain"/>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    const { price, children } = this.props;
    return (
      <div className="bottomBar">
        <div id="price">
          <h3 id="total">Total</h3>
          £{price}
          <br />
        </div>
        <div id="footer-container">
          {children}
        </div>
        <NavLink to="/">
          <img src={logoApp} id="logoApp" width="75em" alt="logo"/>
        </NavLink>
        {/* <p id="promo">Like what you've created? See more of my work over on my <a href="https://www.instagram.com/ejvnails/">Instagram!</a> Or contact me on 07951476008 for more details and to book an appointment!</p> */}
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


export default App;
