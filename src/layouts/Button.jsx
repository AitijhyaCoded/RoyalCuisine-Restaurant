import React from 'react'

const Button = ({type = "button", onclick, title}) => {
  return (
    <div >
        <button type={type} onClick={onclick} className='px-6 py-1 rounded-full bg-red-700 text-white hover:bg-red-700 hover:border-red-700 hover:bg-opacity-80 transition-all'>
        {title}
        </button>
    </div>
  )
}

export default Button
