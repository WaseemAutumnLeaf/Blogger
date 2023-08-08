import React from 'react';
import { render, screen } from '@testing-library/react';
import useFetchData from './useFetchData';

const TestComponent: React.FC = () => {
  const apiUrl = 'https://dummyjson.com/products'; // Replace with a dummy URL (not real endpoint)
  const { data, isLoading, error } = useFetchData(apiUrl);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

test('renders data after fetching', async () => {
  // Render the component
  render(<TestComponent />);

  // In this test, we will simulate a delay of 1 second to mimic an API call
  // and then we will expect the data to be displayed on the screen

  // Wait for the data to load (1 second)
  await screen.findByText(/Loading.../);

  // Simulate a 1-second delay (you can adjust this value as needed)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Expect the data to be displayed on the screen
  const dataItems = await screen.findAllByText(/Blog/); // Assuming "Blog" appears in the names
  expect(dataItems).toHaveLength(2); // Assuming we are returning 2 sample data items
});