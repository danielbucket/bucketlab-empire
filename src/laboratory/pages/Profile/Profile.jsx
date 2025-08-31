import { ProfileLayout } from './profile.styled.js';
import { useLoaderData } from 'react-router-dom';

export default function Profile() {
  const { data } = useLoaderData();

  return (
    <ProfileLayout>
      <h1>Profile of {data.first_name} {data.last_name}</h1>
      <p>Email: {data.email}</p>
      <p>Website: {data.website}</p>
      <p>Phone: {data.phone}</p>
      <p>Company: {data.company}</p>
      <p>Member since: {new Date(data.created_at).toLocaleDateString()}</p>
    </ProfileLayout>
  );
};