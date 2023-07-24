import React, { useState } from 'react';
import styles from "./new.module.css"
import { useRecoilState } from 'recoil';
import { blogs as blogsAtom } from '@/atoms/atoms';
import { useRouter } from 'next/router';

interface BlogPost {
  title: string;
  content: string;
  author: string;
  date: string;
}

const Add: React.FC = () => {

  const router = useRouter();

  const [newBlog, setNewBlog] = useState<BlogPost>({
    title: '',
    content: '',
    author: '',
    date: '',
  });

  const [blogs, setBlogs] = useRecoilState(blogsAtom);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleAddBlog = () => {
    // Here, you can perform the logic to save the new blog using the newBlog state.
    // For example, you can send it to a server or update a state containing all blogs.
    let newBlogs = [...blogs, newBlog];
    setBlogs(newBlogs);
    router.push('/dashboard');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Add New Blog</h2>
      <form>
        <div className={styles['form-group']}>
          <label className={styles.label}  htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newBlog.title}
            onChange={handleInputChange}
            className={styles['input-text']}
          />
        </div>
        <div className={styles['form-group']}>
          <label className={styles.label}  htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={newBlog.content}
            onChange={handleInputChange}
            className={styles['input-textarea']}
          />
        </div>
        <div className={styles['form-group']}>
          <label className={styles.label} htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newBlog.author}
            onChange={handleInputChange}
            className={styles['input-text']}
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="date">Date:</label>
          <input
            type="text"
            id="date"
            name="date"
            value={newBlog.date}
            onChange={handleInputChange}
            className={styles['input-text']}
          />
        </div>
        <button type="button" onClick={handleAddBlog} className={styles['add-button']}>
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default Add;