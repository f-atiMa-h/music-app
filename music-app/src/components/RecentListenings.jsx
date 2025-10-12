import React from 'react'
import recentListeningsData from "../data/recentListeningsData.json"

const RecentListenings = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-[#EAEAEA]">Your Recent Listenings</h2>
      <div className='flex gap-4 overflow-x-auto'>
        {recentListeningsData.map((item) => (
          <div
            key={item.id}
            className="
          min-w-[250px]
          bg-[#1A1A1D] rounded-xl p-3
          hover:bg-[#242428] transition-colors duration-200 cursor-pointer
        "
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg mb-3 w-full h-auto"
            />
            <h3 className="font-medium text-[#A0A0A0]">{item.title}</h3>
            <p className="text-sm text-[#A0A0A0]">{item.description}</p>
            <p className="text-sm text-[#A0A0A0]">{item.artist}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentListenings;