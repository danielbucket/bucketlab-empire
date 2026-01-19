import { rootRoute } from './routes/root.route.jsx';
import { loginRoute } from './routes/login.route.jsx';
import { newAccountRoute } from './routes/newAccount.route.jsx';
import ErrorPage from './pages/ErrorPage/index.jsx';
// import { forgotPasswordRoute } from './routes/forgotPassword.route.jsx';
// import { resetPasswordRoute } from './routes/resetPassword.route.jsx';

export const authRoutes = [
  {
    ...rootRoute,
    errorElement: <ErrorPage />,
    children: [
      { ...loginRoute, index: true },
      { ...newAccountRoute }
    ]
  }
];