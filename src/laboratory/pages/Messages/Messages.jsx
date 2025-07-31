import { MessagesLayout } from './messages.styled.js';
import { useLoaderData } from 'react-router-dom';

export default function Messages() {
  const { messages } = useLoaderData();

  return (
    <MessagesLayout>
      <h1>Messages</h1>
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
    </MessagesLayout>
  );
};