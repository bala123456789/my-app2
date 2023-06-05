
import React from 'react';

import logo from './logo.svg';
import './App.css';

//import { Router, Route, browserHistory, IndexRoute } from 'react-router';
//import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Routes, Route} from 'react-router-dom';
//import {Routes} from 'react-router'

import DemoComponent from './components/Demo/demo.component';
import Menu1Component from './components/Menu1/menu1.component';
import Menu2Component from './components/Menu2/menu2.component';
import Menu3Component from './components/Menu3/menu3.component';



function App() {
  return (
    <div className="App">
     
          <Routes>
       <Route path="/" element={<DemoComponent />} />
      <Route path="/menu1" element={<Menu1Component />} />
       
      <Route path="/menu2" element={<Menu2Component />} />
      <Route path="/menu3" element={<Menu3Component />} />

    </Routes>

          </div>
  );
}

export default App;
