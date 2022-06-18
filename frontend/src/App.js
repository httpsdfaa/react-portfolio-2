import React, { useState } from 'react';
import './App.css';
import Header from './components/template/Header';
import Main from './components/template/Main';
import Footer from './components/template/Footer';

function App() {

  return (
    <React.Fragment>

      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
