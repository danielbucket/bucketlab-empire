export default function Traveler(data) {
  const traveler = data?.traveler || {};

  return (
    <div>
      <h1>Traveler Information</h1>
      <p>Name: {traveler.name}</p>
      <p>Email: {traveler.email}</p>
    </div>
  );

}