import React from 'react'

interface Params{
    params:{
        id: number,
        photo_id: number,
    }
    // searchParams: {

    // }
}

export default function PhotoDetialsPage({ params: { id,photo_id} }: Params) {
  return (
    <div>
        <p>User: id {id}</p>
        <p>Photo: id {photo_id}</p>
    </div>
  )
}

