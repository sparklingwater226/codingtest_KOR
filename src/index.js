import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./Routes";
import { Provider } from "react-redux";
import rootReducer from "./Modules";
import { rootSaga } from "./Modules";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import logger from 'redux-logger';
import { createGlobalStyle } from 'styled-components'

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware, logger)
    // ,
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__
    //   ? composeWithDevTools()
    //   : (f) => f
  )
);

sagaMiddleware.run(rootSaga);

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 14px;
    color: white;
    font-family: 'Montserrat', sans-serif;
  }
  
  html, body, #root {
    height: 100%;
    background-color: black;
    overflow: scroll;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
      width: 0;
      background: transparent;
  }

  button:hover, svg:hover, svg *:hover {
    cursor: pointer;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
  </Provider>
  ,
  document.getElementById('root')
);
