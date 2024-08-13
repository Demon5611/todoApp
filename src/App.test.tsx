import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('adds a new task', async () => {
  render(<App />);
  
  const inputElement = screen.getByPlaceholderText(/what needs to be done/i);
  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  

  fireEvent.submit(inputElement);
  

  const taskElement = await screen.findByText('New Task');
  expect(taskElement).toBeInTheDocument();
});

test('toggles task completion', async () => {
  render(<App />);
  
  const inputElement = screen.getByPlaceholderText(/what needs to be done/i);
  fireEvent.change(inputElement, { target: { value: 'Toggle Task' } });
  

  fireEvent.submit(inputElement);
  
  const checkbox = await screen.findByRole('checkbox');
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
});
