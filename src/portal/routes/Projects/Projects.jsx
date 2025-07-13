import { useState } from 'react';
import { StyledProjects, ListContainer, StyledLink, StyledUL, ContentContainer } from './index.styled.js';
import { useLoaderData } from 'react-router-dom';

export default function Projects() {
  const [activeRepo, setActiveRepo] = useState(null);
  const loaderData = useLoaderData();
  const { pageImage, repoList } = loaderData;

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
    <StyledProjects pageimage={pageImage}>
      {
        activeRepo === null
        ? (
            <ContentContainer>
              {/* <img id="modalImage" src={ backgroundImage }/> */}
            </ContentContainer>
          )
        : (
            <ContentContainer>
              <p>{activeRepo.repo}</p>
              <p>Description: <br/><span>{activeRepo.description}</span></p>
              <p>Tech Stack: <br/><span>{activeRepo.techstack.map((i) => `${i}, `)}</span></p>
            </ContentContainer>
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
