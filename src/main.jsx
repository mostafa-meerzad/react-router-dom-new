import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Root from "./routes/root";
import ErrorPage from "./errorPage";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";

import Contact, { loader as contactLoader } from "./routes/Contact";

import EditContact, {action as editAction} from "./routes/edit";
import {action as destroyAction} from "./routes/destroy"
import Index from "./routes";
// todo: create router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true,
        element: <Index/>
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path:"contacts/:contactId/destroy",
        action: destroyAction
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
