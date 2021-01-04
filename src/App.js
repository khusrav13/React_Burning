import React, {Component} from 'react'
import './App.css';
import Body from "./components/Body";
import Section from "./components/Section";
import Footers from "./components/Footers";


const App = () => {
  return (
    <div className={'app-wrapper'}>
        <Body/>
        < Section />
        < Footers />
    </div>
  );
}



export default App;
