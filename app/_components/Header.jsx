import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div
    className='
    justify-center
    flex
    shadow-sm
    '>
        <Image src='/logo2.svg'
        alt='logo2'
        width={200}
        height={85}
        />
    </div>
  )
}

export default Header