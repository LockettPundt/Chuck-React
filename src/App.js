/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import Quote from './components/Quote';
import ChuckImage from './components/ChuckImage';
import DropdownForm from './components/DropdownForm';
import ChuckModal from './components/ChuckModal';

function App() {
  return (
    <div className="App">
      <Quote />
      <ChuckImage />
      <DropdownForm />
      <ChuckModal />
    </div>
  );
}

export default App;
