import { route as RootRoute } from './routes/Root';
import { route as LoginRoute } from './routes/Login';
import { route as NewUserRoute } from './routes/NewLogin';
// import { route as ForgotPasswordRoute } from './routes/ForgotPassword';
// import { route as ResetPasswordRoute } from './routes/ResetPassword';

export const router = Object.assign({}, RootRoute, {
  errorElement: <div>Error occurred</div>,
  children: [
    { ...LoginRoute, index: true },
    NewUserRoute
  ]
});