import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div>test1</div>
      <div>
        <Link href='/'>return home</Link>
      </div>
    </>
  );
}
