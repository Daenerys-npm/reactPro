import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Login input',()=>{
  render(<App/>);
  fireEvent.change(screen.getByTestId('abc'),{
    target:{value:"admin"},
  });

  fireEvent.change(screen.getByTestId('123'),{
    target:{value:"pass123"},
  });

  fireEvent.click(screen.getByText('Login'));

  expect(screen.getByText('Login Successful')).toBeInTheDocument();

});