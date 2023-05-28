// next js will ignore it during the build since this is part of the getStaticprops
import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

function productDetailPage(props) {
  const { loadedProduct } = props;
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
}

export async function getStaticProps(context) {
  // is an object full of key value pairs
  const { params } = context;

  const productId = params.pid;

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.rpdocuts.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

// telling nextjs that this page is a dynamic page without this fn it will cause error
export async function getStaticPaths() {
  return {
    paths: [{ params: { pid: 'p1' } }, { params: { pid: 'p2' } }, { params: { pid: 'p3' } }],
    fallback: false,
  };
}
