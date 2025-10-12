import React from 'react';
import RecentListenings from "../components/RecentListenings";
import PickedForYou from "../components/PickedForYou";


const Home = () => {
  return (
    <div className='my-20 mx-10'>
      <h1 className='text-4xl text-[#E6E6E6] font-bold my-10 mx-5'>Home</h1>
      <RecentListenings />
      <PickedForYou />
    </div>
  )
}

export default Home