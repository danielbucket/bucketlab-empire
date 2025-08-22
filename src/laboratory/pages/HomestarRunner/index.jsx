import { HomestarRunnerLayout } from './index.styled';
import { useLoaderData } from 'react-router-dom';

export default function HomestarRunner() {
  const { content } = useLoaderData();

  return (
    <HomestarRunnerLayout>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
      <div className="video-container">
        <iframe
          src={content.videoUrl}
          title="Homestar Runner Video"
          allowFullScreen
          className="video-iframe"
          height="300"
          width="98%"
        ></iframe>
      </div>
    </HomestarRunnerLayout>
  );
}


