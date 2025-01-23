import React from 'react'

const Alert = ({className, textAlert} : any) => {

  return (
      <div className='webkit-center absolute' style={{width: '98%', cursor: 'pointer'}}>
        <div className={'shadow-xl rounded p-3 w-2/5 text-left '+className}>{textAlert}</div>
      </div>
  )
}

export default Alert