import React from 'react';
import './App.css';
import Header from './Display';
import TryAain from './DisplayAgain';
import House from './Title';


function App() {
  return (
        <>
            <Header name="Julius" profession="Software Engineer" place="Lux"/>
            <hr/>
            <House name="Lux" needs="desires" want="DESIRE"/>
            <hr/>
            <TryAain tech="React" feeling="great" num="{5}"/>
        </>
  );
}

export default App;
