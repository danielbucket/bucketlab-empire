import { route as RootRoute } from './routes/Root';
import { route as LoginRoute } from './routes/Login';
import { route as CreateUserRoute } from './routes/CreateUser';
// import { route as ForgotPasswordRoute } from './routes/ForgotPassword';
// import { route as ResetPasswordRoute } from './routes/ResetPassword';

export const router = Object.assign({}, RootRoute, {
  errorElement: <div>Error occurred</div>,
  children: [
    LoginRoute,
    CreateUserRoute
  ]
});