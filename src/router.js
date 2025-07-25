import { createBrowserRouter } from 'react-router-dom';
import { router as portalRouter } from './portal/router.jsx';
import { router as labRouter } from './laboratory/router.jsx';
import { router as rootRouter } from './root/router.jsx';

const router = createBrowserRouter([
  rootRouter,
  portalRouter,
  labRouter
]);

export default router;