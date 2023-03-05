import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Movies } from './components/Movies';
import { Lists } from './components/Lists';
import { YourList, loader as listLoader } from './components/YourList';
import { Error } from './modules/Error';


import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Movies />,
      },
      {
        path: "lists",
        element: <Lists />,
      },
      {
        path: "yourlist/:listId",
        element: <YourList />,
        errorElement: <Error />
        // loader: listLoader,
      },
      {
        path: "*",
        element: <Error />,
        // loader: listLoader,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);