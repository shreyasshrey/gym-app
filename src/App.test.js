/*global test*/
/*eslint no-undef: "error"*/
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders some component in the routing', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
