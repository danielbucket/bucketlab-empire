import Projects from '../pages/Projects/index.jsx';
import { repoList } from '../pages/Projects/repoList.js';
import pageImage from '../assets/images/laboratory_03.jpeg';
import { PUBLIC_URLS } from '../../global.urls.js';

export const projectsRoute = {
  path: PUBLIC_URLS.projects.root,
  element: <Projects />,
  loader: async () => {
    return {
      repoList,
      pageImage
    }
  }
};