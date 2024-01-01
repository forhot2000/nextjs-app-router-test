'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Page() {
  const path = usePathname();
  return (
    <>
      <div>{path}</div>
      <ul>
        {links.map((x) => (
          <li key={x.href}>
            <Link href={x.href}>{x.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

const links = [
  { label: 'admin', href: '/admin' },
  { label: 'admin/classes', href: '/admin/classes' },
  { label: 'admin/material', href: '/admin/material' },
  { label: 'admin/banner', href: '/admin/banner' },
];
