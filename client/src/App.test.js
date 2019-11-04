import React from 'react';
import App from './App';
import { render, getByText } from '@testing-library/react';
import Navbar from './Navbar';

test('renders without crashing', () => {
  render(<App />);
});

test('renders without crashing', () => {
  render(<Navbar />);
});

test("Women's World Cup header is found", () => {
  const {getByText} = render(<Navbar />);
getByText("Women's World Cup Players");
});

test("Top 100 Players header is found", () => {
  const {getByText} = render(<App />);
getByText("Top 100 Players:");
});


