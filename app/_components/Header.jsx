import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div
    className='
    justify-center
    flex
    '>
        <Image src='/logo.svg'
        alt='logo'
        width={200}
        height={85}
        />
    </div>
  )
}

export default Header