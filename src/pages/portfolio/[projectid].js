import { useRouter } from 'next/router'; // nextjs Hooks

function PortfolioProjectPage() {
  const router = useRouter(); // extracting dynamic path

  console.log(router.pathname); // pathname url /portfolio/[prjectid]
  console.log(router.query); // {projectid}
  // send a request to some backend server
  // to fetch the piece of data with an id of router.query.projectid

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
