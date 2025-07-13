import { useState } from 'react';
import { StyledProjects, ListContainer, StyledLink, StyledUL, ProjectDetails } from './index.styled.js';
import { useLoaderData } from 'react-router-dom';

export default function Projects() {
  const [activeRepo, setActiveRepo] = useState(null);
  const { pageImage, repoList } = useLoaderData();

  const handleHover = list => {
    list === null ? setActiveRepo(null) : setActiveRepo(list)
  };

  function renderRepoList(arr) {
    return (
      <StyledUL onMouseLeave={() => handleHover(null, false)}>
        {
          arr.map((repo, i) => {
            return (
              <li key={i}>
                <CustomLink
                  to={ repo.url }
                  target="_blank"
                  onMouseEnter={() => handleHover(repo)}
                >{ repo.repo }</CustomLink>
              </li>
            )
          })
        }  
      </StyledUL>
    );
  };
  
  const renderedList = renderRepoList(repoList);

  return (
    <StyledProjects>
      {
        activeRepo === null
        ? (
            <img src={pageImage} alt="Project Background" id="modalImage" />
          )
        : (
            <ProjectDetails>
              <p>{activeRepo.repo}</p>
              <p>Description: <br/><span>{activeRepo.description}</span></p>
              <p>Tech Stack: <br/><span>{activeRepo.techstack.map((i) => `${i}, `)}</span></p>
            </ProjectDetails>
          )
      }
      <ListContainer>
        { renderedList }
      </ListContainer>
    </StyledProjects>
  );
};

function CustomLink({ to, children, ...props }) {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
};
