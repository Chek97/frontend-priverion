import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages/auth';

export const MainRouter = () => {

  const router = createBrowserRouter([
    {
      path: '/auth/login',
      element: <LoginPage />,
    },
    {
      path: '/auth/register',
      element: <RegisterPage />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}
