// next js will ignore it during the build since this is part of the getStaticprops
import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

function productDetailPage(props) {
  const { loadedProduct } = props;

  // fall back content, if fall back set to true
  if (!loadedProduct) {
    return <p>Loading</p>;
  }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}
async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  // is an object full of key value pairs
  const { params } = context;

  const productId = params.pid;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

// telling nextjs that this page is a dynamic page without this fn it will cause error
export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);

  const params = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: params,
    fallback: true, //true, false, block
  };
}

export default productDetailPage;
