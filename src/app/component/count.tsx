import React from 'react'

const Count = ({countA, countB, countC, countD} : any) => {
  return (
    <div>
        <ul>
            <li>A = {countA}</li>
            <li>B = {countB}</li>
            <li>C = {countC}</li>
            <li>D = {countD}</li>
        </ul>
    </div>
  )
}

export default Count