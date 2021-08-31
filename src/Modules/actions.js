// action types
export const SETBEERLIST = "SETBEERLIST";
export const SETCOLUMNLIST = 'SETCOLUMNLIST';

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