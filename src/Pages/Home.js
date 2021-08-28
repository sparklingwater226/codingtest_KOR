import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router";

const Home = () => {
  const [beerList, setBeerList] = useState([]);

  const history = useHistory();

  useEffect(() => {
    axios
    .get('https://api.punkapi.com/v2/beers')
    .then(res => {
      console.log(res.data);
      return setBeerList(res.data);
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
