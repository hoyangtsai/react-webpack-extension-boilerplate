import React, { useState, useCallback, useEffect, useReducer } from "react"
import Button from "../components/Button";
import ColorPicker from "../components/ColorPicker";
import Storage from '../utils/storage';

const initialState = {
  bgColor: '#282c34',
};

const appStore = new Storage(initialState);

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'init':
    case 'updateBgColor':
      const { bgColor } = payload
      return { ...state, bgColor };
    default:
      throw new Error();
  }
}

function App() {
  const [reactDocUrl, setReactDocUrl] = useState('https://react.dev/learn');
  const [webpackDocUrl, setWebpackDocUrl] = useState('https://webpack.js.org/guides/');

  const openReactDoc = useCallback((e) => {
    chrome.tabs.create({ url: reactDocUrl });
  }, [reactDocUrl]);

  const openWebpackDoc = useCallback((e) => {
    chrome.tabs.create({ url: webpackDocUrl });
  }, [webpackDocUrl]);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    appStore.init().then((cached) => {
      dispatch({
        type: 'init',
        payload: cached
      });
    });
  }, []);

  return (
    <div className="App" style={{backgroundColor: state.bgColor}}>
      <div className="styler">
        <ColorPicker
          value={state.bgColor}
          onChange={e => dispatch({
            type: 'updateBgColor',
            payload: {
              bgColor: e.target.value
            }
          })}
          onBlur={() => appStore.set(state)}
        />
      </div>
      <h2>React App</h2>
      <Button className="app-button" onClick={openReactDoc}>React Docs</Button>
      <Button className="app-button" onClick={openWebpackDoc}>Webpack Docs</Button>
    </div>
  )
}

export default App