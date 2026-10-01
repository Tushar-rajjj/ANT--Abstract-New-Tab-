import React from 'react'

const DaysCard = () => {
  return (
    <div className="w-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
      <div className="w-full h-auto flex justify-start items-center">
        <span className="text-2xl font-bold">Mon</span>
        <span className="text-2xl font-bold">Tue</span>
        <span className="text-2xl font-bold">Wed</span>
        <span className="text-2xl font-bold">Thu</span>
        <span className="text-2xl font-bold">Fri</span>
        <span className="text-2xl font-bold">Sat</span>
        <span className="text-2xl font-bold">Sun</span>
      </div>
    </div>
  )
}

export default DaysCard
