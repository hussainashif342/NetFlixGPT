import React, { useState } from 'react'
import Header from './Header'

const LogIn = () => {
  const [isSingInForm, setSignInForm] = useState(true)
  const toggleSignForm = () => {
    setSignInForm(!isSingInForm)
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg
" alt="logo"></img>
      </div>
      <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-50'>
        <h1 className='font-bold text-3xl py-4'>{isSingInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSingInForm &&(
        <input type="text" placeholder='Full Name' className='p-2 my-4 w-full bg-gray-500 rounded-lg' />

        )}
        <input type="text" placeholder='Enter Email Address' className='p-2 my-4 w-full bg-gray-500 rounded-lg' />
        <input type="password" placeholder='Enter Password' className='p-2 my-4 w-full bg-gray-500 rounded-lg' />
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'> {isSingInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignForm}> {isSingInForm ? " Already an user Sign In" : "Are you new to Netflix? Sign Up"}  now</p>
      </form>
    </div>
  )
}

export default LogIn