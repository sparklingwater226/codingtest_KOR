import React from 'react'
import { useHistory } from "react-router";

const BeerList = () => {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push('/home')}>back home</button>
    </div>
  )
}

export default BeerList
