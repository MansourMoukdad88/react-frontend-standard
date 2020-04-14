import React from 'react'; 

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id:'p1',
    title: 'Empire State Building',
    description: 'One of the most famous shy scrapers in the world!',
    imageUrl: "https://res.cloudinary.com/drbgxq5pt/image/fetch/f_auto,q_auto:eco/https%3A%2F%2Fwww.kitano.com%2Fresourcefiles%2Fsnippet-main-img%2Fempire-state-building-in-new-york-top.jpg%3Fmimdevice%3Dmobile",
    address: "20 W 34th St, New York, NY 10001, United States",
    location:{
      lat:40.7484405,
      lng:-73.9856644
    },
    creator: 'u1'
  },
  {
    id:'p2',
    title: 'Empire State Building',
    description: 'One of the most famous shy scrapers in the world!',
    imageUrl: "https://res.cloudinary.com/drbgxq5pt/image/fetch/f_auto,q_auto:eco/https%3A%2F%2Fwww.kitano.com%2Fresourcefiles%2Fsnippet-main-img%2Fempire-state-building-in-new-york-top.jpg%3Fmimdevice%3Dmobile",
    address: "20 W 34th St, New York, NY 10001, United States",
    location:{
      lat:40.7484405,
      lng:-73.9856644
    },
    creator: 'u2'
  }
]

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES}/>
};

export default UserPlaces;