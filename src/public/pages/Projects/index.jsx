import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    StyledProjects,
    ContentStyle,
    StyledLink,
    StyledUL,
    RepoImage,
    ProjectDetails,
    ImageStyle
} from './index.styled.js';

export default function Projects() {
  const [ selectedRepo, setSelectedRepo ] = useState(null);
  const { pageImage, repoList } = useLoaderData();

  const handleClick = (list) => {
    list === null ? setSelectedRepo(null) : setSelectedRepo(list);
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
          selectedRepo && (
            <ProjectDetails $backgroundImage={selectedRepo?.img}>
                <div className="repo-name">{selectedRepo.repo}</div>
                <div className="repo-content">
                  <div className="description">{selectedRepo.description}</div>
                  <div className="url">
                    <CustomLink
                      to={selectedRepo.url}
                      target="_blank"
                    >{selectedRepo.url}</CustomLink>
                  </div>
                </div>
            </ProjectDetails>
          )
        }
      </ImageStyle>
      <ContentStyle>
        { renderedList }
      </ContentStyle>
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
