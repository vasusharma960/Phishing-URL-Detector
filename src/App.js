import React from 'react';
import Main from './main';
import { Toaster } from 'react-hot-toast';
import './main.css';

function App() {
  return (
    <React.Fragment>
      <Main />
      <Toaster />
    </React.Fragment>
  );
}

export default App;
