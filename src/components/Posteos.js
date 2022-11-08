// Import
import React from 'react'
import posteos from './data.json'
import Post from './Post'

// Component
export default function Posteos({aumentar}) {
  return (
    <div className='container'>
      {posteos.map(post => <Post keyd={post.id} post={post} aumentar={aumentar} />)}
    </div>
  )
}
