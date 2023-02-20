import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

import { HomePage, CountryDetails, NotFound } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/country/:code',
        element: <CountryDetails />,
      },
    ],
  },
]);
