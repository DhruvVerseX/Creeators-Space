import React from 'react'

 export async function page({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  return (
    <div>
     i know you are best {id}
    </div>
  )
}
