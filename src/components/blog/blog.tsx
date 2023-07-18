"use client"
import React from 'react'
import type { BlogPost } from '../../types/blog-post.model';

const Blog: React.FC<{post: BlogPost}> = ({post}) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div>
        <span>Author: {post.author}</span>
        <span>Date: {post.date}</span>
      </div>
    </div>
  )
}

export default Blog;