import { createBrowserRouter } from 'react-router-dom';
import { router as portalRouter } from './portal/router.jsx';
import { router as labRouter } from './laboratory/router.jsx';

const routes = [
  portalRouter,
  labRouter
];

const router = createBrowserRouter(routes);

export default router;