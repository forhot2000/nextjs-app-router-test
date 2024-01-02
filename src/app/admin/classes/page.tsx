import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div>classes</div>
      <div>
        <Link href='/admin'>return admin</Link>
      </div>
    </>
  );
}
