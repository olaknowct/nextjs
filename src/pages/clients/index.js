import Link from 'next/link';

function ClientsPage() {
  // Data from database
  const clients = [
    { id: 'chris', name: 'tuper' },
    { id: 'manu', name: 'ginobli' },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              className='underline'
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
