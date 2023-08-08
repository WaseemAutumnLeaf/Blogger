import React, {useEffect} from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Dashboard from './index';
import { RecoilRoot, useRecoilValue } from 'recoil';
import {user as userAtom, blogs as blogsAtom} from "../../atoms/atoms"

const RecoilObserver = ({node, onChange}) => {
    const value = useRecoilValue(node);
    useEffect(() => onChange(value), [onChange, value]);
    return null;
  };
  

// Sample user data and blogs for testing
const testUser = 'waseem@al.co.za';
const testBlogs = [
  { title: 'Blog 1', dateAdded: '2023-07-24' },
  { title: 'Blog 2', dateAdded: '2023-07-25' },
];

test('displays the correct user name', async () => {
  render(
    <RecoilRoot
      initializeState={(snap) => {
        snap.set(userAtom, testUser);
        // snap.set(blogsAtom, testBlogs);
      }}
    >
      <Dashboard />
    </RecoilRoot>
  );
  const headingElement = screen.getByText(`Welcome, waseem@al.co.za`);
  expect(headingElement).toBeInTheDocument();
});

// Sample user data and blogs for testing

test('adding and deleting blogs works', () => {
  render(
    <RecoilRoot
      initializeState={(snap) => {
        // snap.set(userAtom, testUser);
        snap.set(blogsAtom, testBlogs);
      }}
    >
      <Dashboard />
    </RecoilRoot>
  );
  // Verify that initial blogs are displayed in the table
  const initialBlog1 = screen.getByText('Blog 1');
  const initialBlog2 = screen.getByText('Blog 2');
  expect(initialBlog1).toBeInTheDocument();
  expect(initialBlog2).toBeInTheDocument();

});