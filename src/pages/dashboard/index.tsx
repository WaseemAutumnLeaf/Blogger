import React, { useState } from 'react';
import styles from "./dashboard.module.css";
import { useRecoilState } from 'recoil';
import {blogs as blogsAtom} from "../../atoms/atoms";
import Link from 'next/link'

interface Blog {
  name: string;
  dateAdded: string;
}

const Dashboard: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string>('user@example.com');
  // const [blogs, setBlogs] = useState<Blog[]>([
  //   { name: 'Blog 1', dateAdded: '2023-07-23' },
  //   { name: 'Blog 2', dateAdded: '2023-07-24' },
  //   // Add more blogs here as needed
  // ]);

  const [blogs, setBlogs] = useRecoilState(blogsAtom);

  const handleAddBlog = () => {
    // const newBlog: Blog = {
    //   name: `New Blog ${blogs.length + 1}`,
    //   dateAdded: new Date().toISOString().split('T')[0], // Get the current date in 'YYYY-MM-DD' format
    // };
    // setBlogs([...blogs, newBlog]);

  };

  const handleDeleteBlog = (index: number) => {
    const updatedBlogs = [...blogs];
    updatedBlogs.splice(index, 1);
    setBlogs(updatedBlogs);
  };

  return (
    <div className={styles.container}>
      <h2 className="heading">Welcome, {userEmail}</h2>

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