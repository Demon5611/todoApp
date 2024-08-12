import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';



test('adds a new task', () => {
  render(<App />);
  
  const inputElement = screen.getByPlaceholderText(/what needs to be done/i);
  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  fireEvent.click(screen.getByText(/add task/i));
  
  expect(screen.getByText(/new task/i)).toBeInTheDocument();
});

test('toggles task completion', () => {
  render(<App />);
  
  const inputElement = screen.getByPlaceholderText(/what needs to be done/i);
  fireEvent.change(inputElement, { target: { value: 'Toggle Task' } });
  fireEvent.click(screen.getByText(/add task/i));
  
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  
  expect(checkbox).toBeChecked();
});


