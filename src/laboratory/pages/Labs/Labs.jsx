// import { LabsStyle } from './Labs.style.jsx';
import { useLoaderData } from 'react-router-dom';

export default function Labs() {
  const data = useLoaderData();

  return (
    <div>
      <h1>{data.content.title}</h1>
      <p>{data.content.description}</p>
      <img src={data.pageImage} alt="Labs" />
    </div>
  );
};