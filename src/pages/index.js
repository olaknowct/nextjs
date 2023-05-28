// next js will ignore it during the build since this is part of the getStaticprops
import fs from 'fs/promises';
import path from 'path';

export default function Home(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

// code that will never be visible on the client side
// nextjs will run this code before running the function component
// any code inside wil get executed in the serverside
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}
