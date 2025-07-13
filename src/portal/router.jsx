import Root from './routes/Root';
import Home from './routes/Home';
import Login from './routes/Login';
import About from './routes/About';
import Contact from './routes/Contact';
import Projects from './routes/Projects';
import ErrorPage from './routes/ErrorPage';

export const router = {
  path: '/',
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/',
      element: <Home />,
      index: true
    },
    { path: '/about', element: <About /> },
    { path: '/login', element: <Login /> },
    { path: '/contact', element: <Contact /> },
    { path: '/projects', element: <Projects /> }
  ]
};