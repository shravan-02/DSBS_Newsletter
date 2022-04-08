import React from 'react'

const HomeFacts = () => {
  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-2 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold text-black">
        Facts
      </h3>
      <div className="grid grid-cols-1">
        <span className="ml-6 mb-3 block pb-3 text-black">
          <ul className="list-outside list-disc select-none">
            <li className="mb-5 hover:text-xl">
              More than 95% percent of the faculty have completed their
              doctorate, and remaining members are pursuing Ph.D.
            </li>
            <li className="mb-5 hover:text-xl ">7 International Patents Grants</li>
            <li className="mb-5 hover:text-xl 
            ">25 Indian Patents Published</li>
          </ul>
        </span>
      </div>
    </div>
  )
}

export default HomeFacts
