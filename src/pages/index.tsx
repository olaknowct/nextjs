import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center  ${inter.className}`}>
      <h1 className='text-5xl'>The home Page</h1>
      <ul>
        <li>
          <Link href='/portfolio' className='underline'>
            Porfolio
          </Link>
        </li>
        <li>
          <Link href='/clients' className='underline'>
            Clients
          </Link>
        </li>
      </ul>
    </main>
  );
}
