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
export async function getStaticProps() {
  return {
    props: {
      products: [{ id: 'p1', title: 'Product test' }],
    },
  };
}
