import { ProfileLayout } from './profile.styled.js';
import { useLoaderData } from 'react-router-dom';

export default function Profile() {
  const { user } = useLoaderData();

  return (
    <ProfileLayout>
      <h1>Profile of {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>User ID: {user.id}</p>
    </ProfileLayout>
  );
};