import React from 'react'

import Destinations from './components/destinations/Destinations'

import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search';



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
    
     
    </div>
  );
}

export default App;