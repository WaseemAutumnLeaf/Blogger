"use client"
import React from 'react'
import type { BlogPost } from '@/src/types/blog-post.model'
import BlogCard from '../blog-card/blog-card';
import { useRecoilState } from 'recoil';
import {blogs as blogsAtom} from "../../atoms/atoms";

interface BlogsProps {
    blogs: BlogPost[];
}

const Blogs: React.FC<BlogsProps> = () => {

  const mock: BlogPost  = {
    "title": "My First Blog Post",
    "content": "This is the content of my first blog post.",
    "author": "John Doe",
    "date": "July 6, 2023"
  }

  const [blogs, setBlogs] = useRecoilState(blogsAtom);

    return (
        <div>
          {blogs.map((blog: BlogPost, index: number) => (
            <div style={{height: "50vh", width: "40vw", marginBottom: "40px"}}>
              <BlogCard key={index} post={blog}/>
            </div>
            ))}
        </div>
      );
}

export default Blogs