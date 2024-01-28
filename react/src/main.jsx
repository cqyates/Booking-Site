import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import './index.css';

import ErrorPage from './pages/Error.jsx';
import HomePage from './pages/Home';
import CurrentProjectsPage from './pages/Current';
import PortfolioPage from './pages/Portfolio';
import SkillsPage from './pages/Skills';
import ResumePage from './pages/Resume';
import StudentsPage from "./pages/Students"


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'current',
        element: <CurrentProjectsPage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'skills',
        element: <SkillsPage />,
      },
      {
        path: 'resume',
        element: <ResumePage/>,
      },
      {
        path: 'students',
        element: <StudentsPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>
);
