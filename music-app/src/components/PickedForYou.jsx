import React from 'react'
import pickedForYouData from "../data/pickedForYouData.json"

const PickedForYou = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold my-4 text-[#EAEAEA]">Picked for You</h2>

      <div
        className="
      flex gap-4 overflow-x-auto
      sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
    "
      >
        {pickedForYouData.map((item) => (
          <div
            key={item.id}
            className="
          min-w-[150px] sm:min-w-0
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

export default PickedForYou;