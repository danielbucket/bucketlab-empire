import Root from './Root.jsx';
// import GithubIcon from '../../assets/icons/github/github-mark.png';

// import { AiOutlineLinkedin as LinkedInIcon } from "react-icons/ai";
import { FaLinkedin as LinkedInIcon } from "react-icons/fa";
import { FaGithubSquare as GithubIcon } from "react-icons/fa";



export const route = {
  path: '/terminal',
  element: <Root />,
  loader: async () => {
    return {
      GithubIcon,
      LinkedInIcon,
    };
  }
};