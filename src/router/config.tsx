
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

// Lazy load components
const Home = lazy(() => import('../pages/home/page'));
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'));
const Trading = lazy(() => import('../pages/trading/Trading'));
const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/Register'));
const Deposit = lazy(() => import('../pages/deposit/Deposit'));
const Withdraw = lazy(() => import('../pages/withdraw/Withdraw'));
const Team = lazy(() => import('../pages/team/Team'));
const Profile = lazy(() => import('../pages/profile/Profile'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/trading',
    element: <Trading />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/deposit',
    element: <Deposit />
  },
  {
    path: '/withdraw',
    element: <Withdraw />
  },
  {
    path: '/team',
    element: <Team />
  },
  {
    path: '/team-invite',
    element: <Team />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
