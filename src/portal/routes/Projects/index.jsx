import { useEffect, useState } from 'react';
import { ProjectsContainer, ContentWrapper, StyledLink, StyledUL, ModalWrapper } from './index.styled.js';
import { fakeLoaderData } from './repotList.js';
import importedImage from '../../assets/images/laboratory_02.jpeg';

export default function Projects() {
  const [repotList, setRepoList] = useState([]);
  const [activeRepo, setActiveRepo] = useState(null);
  const [pageImage, setPageImage] = useState();
  const loaderData = fakeLoaderData();

  useEffect(() => {
    setPageImage(() => importedImage);
    setRepoList(() => loaderData);
  }, []);

  const handleHover = (repot) => {
    repot === null ? setActiveRepo(null) : setActiveRepo(repot)
  };

  function renderRepoList(arr) {
    return (
      <StyledUL
        onMouseLeave={() => handleHover(null, false)}
      >
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
  
  const repoList = renderRepoList(repotList);

  return (
    <ProjectsContainer>
      {
        activeRepo === null
        ? (
            <ModalWrapper>
              <img id="modalImage" src={ pageImage }/>
            </ModalWrapper>
          )
        : (
            <ModalWrapper>
              <p>{activeRepo.repo}</p>
              <p>Description: <br/><span>{activeRepo.description}</span></p>
              <p>Tech Stack: <br/><span>{activeRepo.techstack.map((i) => `${i}, `)}</span></p>
            </ModalWrapper>
          )
      }
      <ContentWrapper>
        { repoList }
      </ContentWrapper>
    </ProjectsContainer>
  );
};

function CustomLink({ to, children, ...props }) {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
};
