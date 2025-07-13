import { useState } from 'react';
import {
    StyledProjects,
    ListContainer,
    StyledLink,
    StyledUL,
    ProjectDetails,
    ImageStyle
} from './index.styled.js';
import { useLoaderData } from 'react-router-dom';
import { StyledContent } from '../../style/root.style.js';

export default function Projects() {
  const [ activeRepo, setActiveRepo ] = useState(null);
  const { pageImage, repoList } = useLoaderData();

  const handleClick = (list) => {
    list === null ? setActiveRepo(null) : setActiveRepo(list)
  };

  const renderList = (list) => {
    return (
      <StyledUL >
        {
          list.map((repo, i) => {
            return (
              <li key={i}>
                <div className="list-item"
                  onClick={() => handleClick(repo)}>
                  {repo.repo}
                </div>
              </li>
            )
          })
        }
      </StyledUL>
    )
  };

  const renderedList = renderList(repoList);
  return (
    <StyledProjects>
      <ImageStyle $pageImage={pageImage}>
        {
          activeRepo && (
            <ProjectDetails>
              <div className="repo-name">{activeRepo.repo}</div>
              <div className="repo-content">
                <div className="description">{activeRepo.description}</div>
                <div className="url">
                  <CustomLink
                    to={activeRepo.url}
                    target="_blank"
                  >{activeRepo.url}</CustomLink>
                </div>
              </div>
            </ProjectDetails>
          )
        }
      </ImageStyle>
      <StyledContent>
        <ListContainer>
          { renderedList }
        </ListContainer>
      </StyledContent>
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
