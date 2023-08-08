import React, { useState } from 'react';
import styles from "./dashboard.module.css";
import { useRecoilState } from 'recoil';
import {blogs as blogsAtom, user as userAtom} from "../../atoms/atoms";
import Link from 'next/link'

interface Blog {
  name: string;
  dateAdded: string;
}

const Dashboard = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const [blogs, setBlogs] = useRecoilState(blogsAtom);

  const handleDeleteBlog = (index: number) => {
    const updatedBlogs = [...blogs];
    updatedBlogs.splice(index, 1);
    setBlogs(updatedBlogs);
  };

  return (
    <div className={styles.container}>
      <h2 className="heading">Welcome, {user}</h2>

      <button className={styles.addButton}><Link href="/new">Add New Blog</Link></button>

      <table className={styles['blog-table']}>
        <thead>
          <tr>
            <th>Blog Name</th>
            <th>Date Added</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr key={index}>
              <td>{blog.title}</td>
              <td>{blog.date}</td>
              <td>
                <button className={styles['delete-button']} onClick={() => handleDeleteBlog(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;