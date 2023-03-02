import { lazy } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import WrapperRouteComponent from './WrapperRouteComponent';

const Login = lazy(() => import('pages/Login'));
const NotFound = lazy(() => import('pages/NotFound'));

const routeList: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/login',
    element: <WrapperRouteComponent element={<Login />} titleId="Đăng nhập" />,
  },
  {
    path: '*',
    element: <WrapperRouteComponent element={<NotFound />} titleId="Not Found" />,
  },
];

const AppRouting: React.FC = () => {
  const element = useRoutes(routeList);

  return element;
};

export default AppRouting;
