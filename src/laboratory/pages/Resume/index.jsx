import { ResumeLayout } from './index.styled';
import { useLoaderData } from 'react-router-dom';

export default function Resume() {
  const { content } = useLoaderData();
  console.log('Loaded resume content:', content);
  return (
    <ResumeLayout>
      <h1>Resume</h1>
      <p>Content</p>
    </ResumeLayout>
  );
}


