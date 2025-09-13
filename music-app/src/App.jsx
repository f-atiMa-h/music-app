import { useState } from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';


import "./index.css"

function App() {
  

  return (
    <div className='flex bg-[#E3DEE2]'>
      {/* <p>Another one...hope this goes well</p>   */}
      <Navbar />
      
      <Body />
    </div>
  )
}

export default App
