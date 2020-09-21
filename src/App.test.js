import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders githubname', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Your GitHub name/i);
  expect(linkElement).toBeInTheDocument();
});
