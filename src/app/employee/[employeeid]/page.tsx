import React from 'react'

interface EmployeeDetailProps {
  employeeid: string;
}

const EmployeeDetail = async ({params}: {params: EmployeeDetailProps}) => {
  const a = (await params).employeeid
  return (
    <div>EmployeeDetail {a}</div>
  )
}

export default EmployeeDetail