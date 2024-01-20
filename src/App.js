// src/App.js

import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        {/* Add your main content here */}
        <h1>Welcome to the Billing Software</h1>
      </main>
    </div>
  );
};

export default App;
