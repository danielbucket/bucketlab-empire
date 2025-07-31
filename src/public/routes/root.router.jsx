import Root from '../pages/Root/index.jsx';

import { FaLinkedin as LinkedInIcon } from "react-icons/fa";
import { FaGithubSquare as GithubIcon } from "react-icons/fa";

export const rootRoute = {
  path: '/',
  element: <Root />,
  loader: async () => {
    return {
      GithubIcon,
      LinkedInIcon,
    };
  }
};