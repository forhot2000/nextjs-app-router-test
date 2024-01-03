import Link from 'next/link';

const data = [
  { href: '/admin/classes/xxx', title: 'classes xxx' },
  { href: '/admin/classes', title: 'classes' },
  { href: '/admin/material/xxx', title: 'material xxx' },
  { href: '/admin/material', title: 'material' },
  { href: '/admin/yyy/xxx', title: 'yyy/xxx' },
  { href: '/admin/xxx', title: 'xxx' },
  { href: '/admin', title: 'admin' },
];

export function DebugAdminLayout() {
  return (
    <div className='debug'>
      <ul>
        {data.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
