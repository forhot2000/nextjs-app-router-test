import Link from 'next/link';

export function DebugAdminLayout() {
  return (
    <div className='debug'>
      <ul>
        <li>
          <Link href='/admin/classes/xxx'>classes xxx</Link>
        </li>
        <li>
          <Link href='/admin/classes'>classes</Link>
        </li>
        <li>
          <Link href='/admin/material/xxx'>material xxx</Link>
        </li>
        <li>
          <Link href='/admin/material'>material</Link>
        </li>
        <li>
          <Link href='/admin/yyy/xxx'>yyy/xxx</Link>
        </li>
        <li>
          <Link href='/admin/xxx'>xxx</Link>
        </li>
        <li>
          <Link href='/admin'>admin</Link>
        </li>
      </ul>
    </div>
  );
}
