/* Class: AppTest
 * Purpose: Tests the behavior of the App component.
 * Return Value: None (side effects of rendering and testing components).
 */

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
