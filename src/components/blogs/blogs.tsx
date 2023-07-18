"use client"
import React from 'react'
import type { BlogPost } from '@/src/types/blog-post.model'
import BlogCard from '../blog-card/blog-card';

interface BlogsProps {
    blogs: BlogPost[];
}

const Blogs: React.FC<BlogsProps> = ({blogs}) => {
    return (
        <div>
          {blogs.map((blog: BlogPost, index: number) => (
            <div style={{display: 'flex', flexDirection: "column", gap: "20px"}}>
              <BlogCard key={index} post={blog}/>
            </div>
            ))}
        </div>
      );
}

export default Blogs