import React from 'react'

const ButtonLoading = ({className} : any) => {
  return (
    <button className={className}><span className="loading loading-spinner loading-xs text-white"></span></button>
  )
}

export default ButtonLoading