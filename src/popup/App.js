import React, { useState, useCallback } from "react"
import Button from "../components/Button";

function App() {
  const [reactDocUrl, setReactDocUrl] = useState('https://reactjs.org/');
  const [webpackDocUrl, setWebpackDocUrl] = useState('https://webpack.js.org/');

  const openReactDoc = useCallback((e) => {
    chrome.tabs.create({ url: reactDocUrl });
  }, [reactDocUrl]);

  const openWebpackDoc = useCallback((e) => {
    chrome.tabs.create({ url: webpackDocUrl });
  }, [webpackDocUrl]);

  return (
    <div className="App">
      <h2>React App</h2>
      <Button className="app-button" onClick={openReactDoc}>React Docs</Button>
      <Button className="app-button" onClick={openWebpackDoc}>Webpack Docs</Button>
    </div>
  )
}

export default App