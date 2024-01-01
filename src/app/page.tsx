import { delay } from '@/lib/delay';
import Link from 'next/link';

export default async function Home() {
  const links = await getLinks();
  return (
    <main>
      <h2>Home</h2>

      <ul>
        {links.map((x) => (
          <li key={x.id}>
            <Link href={x.href}>{x.label}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

async function getLinks() {
  await delay(100);
  return [
    { id: 1, label: 'test1', href: '/test1' },
    { id: 2, label: 'test1/foo', href: '/test1/foo' },
    { id: 3, label: 'test2', href: '/test2' },
  ];
}
