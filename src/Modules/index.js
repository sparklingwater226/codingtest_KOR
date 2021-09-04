import { all } from "redux-saga/effects";
import { SETBEERLIST, SETCOLUMNLIST, ADDCART, REMOVECART } from './actions'
import SimpleModal from '../Components/SimpleModal'

import { enableES5 } from "immer";

enableES5();

const initialState = {
  beerList: [],
  columnList: [
    {field: 'image_url', title: 'Image',  render: rowData => <img src={rowData.image_url} alt={rowData.name} style={{width: 50}}/>},
    {field: 'name', title: 'This Beer Is', render: rowData => <SimpleModal rowData={rowData}/>},
    {field: 'first_brewed', title: 'First Brewed On'},
    {field: 'abv', title: 'ABV'},
    {field: 'ibu', title: 'IBU'},
    {field: 'target_fg', title: 'Target FG'},
    {field: 'target_og', title: 'Target OG'},
    {field: 'ebc', title: 'EBC'},
    {field: 'srm', title: 'SRM'},
    {field: 'ph', title: 'PH'},
    {field: 'attenuation_level', title: 'Attenuation Level'},
    {field: 'volume', title: 'Volume'},
    {field: 'boil_volume', title: 'Boil Volume'},
    {field: 'contributed_by', title: 'Contributed By'},
  ],
  cartItems: [
    {
      image_url: 'https://images.punkapi.com/v2/keg.png',
      name: 'Buzz',
      price: 10000,
      quantity: 1
    }
  ]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETBEERLIST:
      return Object.assign({}, state, action.payload);
    case SETCOLUMNLIST:
      return Object.assign({}, state, action.payload);
    case ADDCART:
      const idx = state.cartItems.findIndex(el => el.name === action.payload.name);
      if (idx > -1) {
        let itemToAdd = state.cartItems[idx];
        itemToAdd.quantity++;
        return Object.assign({}, state, {
          cartItems: [...state.cartItems.slice(0, idx), itemToAdd, ...state.cartItems.slice(idx + 1)]
        });
      } else {
        return Object.assign({}, state, {
          cartItems: [...state.cartItems, action.payload]
        })
      }
    case REMOVECART:
      return Object.assign({}, state, {
        cartItems: state.cartItems.filter(el => el.name !== action.payload)
      });
    default: 
      return state;
  }
}

// export default rootReducer;
export default rootReducer;

//wathcer saga
export function* rootSaga() {
  yield all([
  ]);
}
