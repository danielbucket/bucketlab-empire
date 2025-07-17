import Root from './Root.jsx';

import { FaLinkedin as LinkedInIcon } from "react-icons/fa";
import { FaGithubSquare as GithubIcon } from "react-icons/fa";

export const route = {
  path: '/',
  element: <Root />,
  loader: async () => {
    return {
      GithubIcon,
      LinkedInIcon,
    };
  }
};