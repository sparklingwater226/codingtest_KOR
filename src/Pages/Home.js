import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router";
import { useDispatch } from 'react-redux';
import { setBeerList } from '../Modules/actions';
import styled from 'styled-components'
import Button from '../Components/Button';
import Body from "../Components/Body"
  
const Title = styled.h1`
  font-size: 5rem;
  margin: 20px 0;
  font-family: 'Frijole', sans-serif;
`;

const Description = styled.div`
  margin-bottom: 50px;
  text-align: center;
`;

const Home = () => {
  const [mainImg, setMainImg] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const refineBeerData = (data) => {
    return data.map(el => {
      el.boil_volume = `${el.boil_volume.value} ${el.boil_volume.unit}`;
      el.volume = `${el.volume.value} ${el.volume.unit}`;
      el.contributed_by = el.contributed_by.split(' <')[0];
      el.category = '';

      if (el.abv < 5) el.category = '1';
      else if (el.abv >= 5 && el.abv < 10) el.category = '2';
      else if (el.abv >= 10 && el.abv < 15) el.category = '3';
      else if (el.abv >= 15) el.category = '4';
      
      return el;
    })
  };

  useEffect(() => {
    axios
    .get('https://api.punkapi.com/v2/beers')
    .then(res => {
      dispatch(setBeerList(refineBeerData(res.data)));
      setMainImg(res.data[17].image_url);
    })
    .catch(e => console.log(e));
  }, [dispatch])

  return (
    <Body>
      <div style={{height: 195}}>
        {mainImg ? <img src={mainImg} alt={'main_img'} style={{width: 50}} /> : null}
      </div>
      <Title>WELCOME!</Title>
      <Description>
        <div>to the BrewDog back catalogue.</div>
        <div>Here you can browse every single BrewDog beer recipe known to humankind.</div>
        <div>Happy brewing!</div>
      </Description>
      <Button onClick={() => history.push('/beerlist')}>SEE BEER LIST</Button>
    </Body>
  )
}

export default Home
