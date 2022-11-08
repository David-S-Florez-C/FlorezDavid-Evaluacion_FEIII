// Imports
import React, { useState } from 'react'

// Component
export default function Post({post, aumentar}) {
  const [cantLikes, setCantLikes] = useState(post.likes)

  const likear = () => {
    setCantLikes(cantLikes + 1)
    aumentar()
  }

  return (
    <div className='posteo'>
      <h3>{post.titulo}</h3>
      <p>{post.texto}</p>
      <button onClick={likear}>👍</button>
      <h5>Likes: {cantLikes > 10 ? <span>Mas de 10 likes</span> : cantLikes }</h5>
    </div>
  )
}
