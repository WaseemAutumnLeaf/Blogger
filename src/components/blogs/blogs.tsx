"use client"
import React, {useState, useEffect} from 'react'
import type { BlogPost } from '../../types/blog-post.model';
import BlogCard from '../blog-card/blog-card';
import { useRecoilState } from 'recoil';
import {blogs as blogsAtom, userId as userIdAtom} from "../../atoms/atoms";
import Link from 'next/link'
import axios from 'axios';

interface BlogsProps {
    blogs: BlogPost[];
}

const Blogs: React.FC<BlogsProps> = () => {

  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useRecoilState(userIdAtom);

  async function fetchData() {
    try {
      const response = await axios.get('/api/posts');
      return response.data; 
    } catch (error) {
      throw new Error('Error fetching data');
    }
  }

  useEffect(() => {
    let isMounted = true;
    async function getData() {
      try {
        const fetchedData = await fetchData();
        if (isMounted) {
          setBlogs(fetchedData.filter(item => {
            return item.userId === userId;
          }));
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
          setLoading(false);
        }
      }
    }
    getData();
    return () => {
      isMounted = false;
    };
  }, []);

    // Render loading state
    if (loading) {
      return <div>Loading...</div>;
    }
  
    // Render error state
    if (error) {
      return <div>Error: {error}</div>;
    }

  return (
    <div>
      {blogs.map((blog: BlogPost, index: number ) => (
        <div style={{ height: "50vh", width: "40vw", marginBottom: "40px" }} key={index + 1}>
          <Link href={`/blog?id=${index + 1}`} as={`/blog/${index + 1}`}>
              <BlogCard post={blog} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Blogs