import Projects from './Projects.jsx';
import { repoList } from './repoList.js';
import pageImage from '../../assets/images/laboratory_03.jpeg';

export const route = {
  path: '/terminal/projects',
  element: <Projects />,
  loader: async () => {
    return {
      repoList,
      pageImage
    }
  }
};