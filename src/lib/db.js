import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://maximus:ZbJcz3dJ88LSUMlM@cluster0.ntrwp.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}
