import React, { useEffect, useState} from 'react'

interface userIdProps {
  userId: string;
}

interface User {
    id: number;
    nama: string;
}

const userId = async ({params} : {params: userIdProps}) => {

    const a = (await params).userId

  return (
    <div>userId = {a}</div>
  )
}

export default userId