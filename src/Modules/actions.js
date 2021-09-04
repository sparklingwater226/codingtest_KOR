// action types
export const SETBEERLIST = "SETBEERLIST";
export const SETCOLUMNLIST = 'SETCOLUMNLIST';
export const ADDCART = 'ADDCART';
export const REMOVECART = 'REMOVECART';

export const setBeerList = (data) => {
  return {
    type: SETBEERLIST,
    payload: {
      beerList: data
    }
  }
}

export const setColumns = (data) => {
  return {
    type: SETCOLUMNLIST,
    payload: {
      columnList: data
    }
  }
}

export const addCart = (data) => {
  return {
    type: ADDCART,
    payload: data
  }
}

export const removeCart = (data) => {
  return {
    type: REMOVECART,
    payload: data
  }
}