import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Movies } from './layout/Movies';
import { Lists } from './layout/Lists';
import { YourList } from './layout/YourList';
import { Error } from './layout/Error';


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
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            index: true,
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
          },
          {
            path: "*",
            element: <Error />,
          },
        ]
      }
    ],
  },
  
],
{
  basename: '/films'
});

root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);