import { EmptyLayout, MainLayout } from '@layouts';
import LoginPage from '@pages/login';
import { PATHS } from '@config/paths';
import DashBoard from '@pages/dashBoard';

export const ROUTES = [
  {
    path: PATHS.login,
    layout: EmptyLayout,
    component: LoginPage,
    exact: true
  },
  {
    path: PATHS.dashboard,
    layout: MainLayout,
    component: DashBoard,
    exact: true,
    private: true
  }
];
