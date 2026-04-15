import Resume from '../pages/Resume';
import content from '../stubs/resume.stub.json';

export const resumeRoute = {
  path: '/laboratory/resume',
  element: <Resume />,
  // return the content as part of the loader data
  loader: () => {
    return { content };
  }
};