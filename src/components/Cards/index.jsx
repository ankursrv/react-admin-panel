import React from 'react'

const Cards = ({amount, title,image}) => {
  return (
      <div
          className="bg-white p-6 rounded-lg flex items-center gap-6 shadow-shadow-primary"
      >
          <img src={`/images/${image}`} alt="" className="w-[68px] h-[68px] object-cover" />
          <div>
              <h3 className="text-base font-normal text-gray-fourth mb-2">{title}</h3>
              <p className="text-[19px] font-semibold text-black-primary">{amount}</p>
          </div>
      </div>
  )
}

export default Cards
