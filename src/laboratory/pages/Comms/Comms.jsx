import { CommsLayout } from './comms.styled.js';
import { useLoaderData } from 'react-router-dom';

export default function Comms() {
  const { messages } = useLoaderData();

  return (
    <CommsLayout>
      <h1>Communications and Messages</h1>
      {/* Render messages here using data */}
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <ul>
          {messages.map((message) => (
            <li key={message.id}>{message.content}</li>
          ))}
        </ul>
      )}
    </CommsLayout>
  );
};