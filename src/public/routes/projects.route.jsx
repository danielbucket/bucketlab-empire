import Projects from '../pages/Projects/index.jsx';
import { repoList } from '../pages/Projects/repoList.js';
import pageImage from '../assets/images/laboratory_03.jpeg';

export const projectsRoute = {
  path: '/projects',
  element: <Projects />,
  loader: async () => {
    return {
      repoList,
      pageImage
    }
  }
};