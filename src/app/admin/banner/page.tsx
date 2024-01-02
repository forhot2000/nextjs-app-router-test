import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div>banner</div>
      <div>
        <Link href='/admin'>return admin</Link>
      </div>
    </>
  );
}
