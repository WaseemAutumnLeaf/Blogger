"use client"
import React, { useEffect, useState } from 'react'
import type { BlogPost } from '../../types/blog-post.model';
import type { CommentModel } from '@/types/comment.model';
import { useRouter } from 'next/router';
import styles from './blog.module.css';
import axios from 'axios';
import Comment from '@/components/comment/comment';
import {userId as userIdAtom} from "../../atoms/atoms"
import { useRecoilState } from 'recoil';

const Blog = () => {
  const router = useRouter();
  const { id } = router.query;

  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [error, setError] = useState(null);
  const [commnetsError, setCommentsError] = useState(null);
  const [comments, setComments] = useState<CommentModel[]>([]);
  const [userId, setUserId] = useRecoilState(userIdAtom);

  async function fetchData() {
    try {
      const response = await axios.get(`/api/posts/${id}`);
      const fetchedData: BlogPost = response.data;
      return fetchedData;
    } catch (error) {
      throw new Error('Error fetching data');
    }
  }

  async function fetchComments() {
    try {
      const response = await axios.get(`/api/comments/${id}`, {
        headers: {
          Authorization: `Bearer ${userId}`
        }
      });
      const commentData: CommentModel[] = response.data;
      console.log(commentData);
      return commentData;
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
          setBlog(fetchedData);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
          setLoading(false);
        }
      }
      try {
        const comments = await fetchComments();
        if (isMounted) {
          setComments(comments);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setCommentsError(error.message);
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
      <div className={styles['blog-section']}>
        <h2 className={styles['blog-title']}>{blog?.title}</h2>
        {/* <h2 className={styles['blog-author']}>By {blog.author}</h2> */}
        <p className={styles['blog-content']}>{blog.body}</p>
      </div>
      {
        comments.map((comment: CommentModel) => {
          return <Comment comment={comment} />
        })
      }
    </div>
  );
};

export default Blog;

// function useRecoilState(userIdAtom: RecoilState<number>): [any, any] {
//   throw new Error('Function not implemented.');
// }
