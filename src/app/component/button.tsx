import Link from 'next/link'
import React from 'react'

const CustomButton = ({href, children, className, onClick} : any) => {
  return (
    <Link href={href}>
        <button type='submit' className={className} onClick={onClick}>
            {children}
        </button>
    </Link>
  )
}

export default CustomButton