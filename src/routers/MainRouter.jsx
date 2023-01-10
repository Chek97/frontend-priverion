import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages/auth';
import { ListStudents, StudentForm } from '../pages/students';

export const MainRouter = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      path: '/auth/register',
      element: <RegisterPage />
    },
    {
      path: '/students',
      element: <ListStudents />
    },
    {
      path: '/students/:id',
      element: <StudentForm />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}
