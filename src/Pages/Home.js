import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import { setBeerList, setColumns } from '../Modules/actions';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    axios
    .get('https://api.punkapi.com/v2/beers')
    .then(res => {
      dispatch(setBeerList(res.data.map(el => {
        let beer = el;
        beer.boil_volume = `${beer.boil_volume.value} ${beer.boil_volume.unit}`;
        beer.volume = `${beer.volume.value} ${beer.volume.unit}`;
        beer.contributed_by = beer.contributed_by.split(' <')[0];
        beer.category = '';

        if (beer.abv < 5) beer.category = '1';
        else if (beer.abv >= 5 && beer.abv < 10) beer.category = '2';
        else if (beer.abv >= 10 && beer.abv < 15) beer.category = '3';
        else if (beer.abv >= 15) beer.category = '4';
        
        return beer;
      })));
      return;
    })
    .catch(e => console.log(e));
  }, [])

  return (
    <div>
      <button onClick={() => history.push('/beerlist')}>see beer list</button>
    </div>
  )
}

export default Home
