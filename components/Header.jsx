import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import SRMImage from '../public/SRM.png'
import { getCategories } from '../services'
const Header = () => {
  // const [categories, setCategories] = useState([])
  // useEffect(() => {
  //   getCategories().then((newCategories) => setCategories(newCategories))
  // }, [])
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b-4 border-white py-8">
        <div className="block md:float-left">
          <Link href="/">
            <h1 className="cursor-pointer text-center text-white text-3xl font-semibold transition duration-700 hover:text-slate-300">
              DATA CHRONICLE
            </h1>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          <Link href="/about">
            <span className="mt-2 ml-10 cursor-pointer align-middle text-xl font-semibold text-white md:float-right">
              About
            </span>
          </Link>
          <Link href="/newsletter">
            <span className="mt-2 ml-10 cursor-pointer align-middle text-xl font-semibold text-white md:float-right">
              Newsletter
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
