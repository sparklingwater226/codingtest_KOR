import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { SETBEERLIST, SETCOLUMNLIST } from './actions'
import SimpleModal from '../Components/SimpleModal'

//watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from "immer";

enableES5();

const initialState = {
  beerList: [],
  columnList: [
    {field: 'image_url', title: 'Image',  render: rowData => <img src={rowData.image_url} style={{width: 50}}/>},
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
  ]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETBEERLIST:
      return Object.assign({}, state, action.payload);
    case SETCOLUMNLIST:
      return Object.assign({}, state, action.payload);
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
