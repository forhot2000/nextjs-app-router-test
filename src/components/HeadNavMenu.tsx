'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function HeadNavMenu({ data }: { data: any[] }) {
  const path = usePathname();
  return <NavMenu data={data} selectedKeys={[path]} />;
}

function NavMenu({ data, selectedKeys }: { data: any[]; selectedKeys: string[] }) {
  const isActive = (x: any) => {
    return selectedKeys.includes(x.href);
  };
  return (
    <ul>
      {data.map((x) => (
        <li key={x.href}>
          <NavMenuItem x={x} active={isActive(x)} />
          {x.children ? <NavMenu data={x.children} selectedKeys={selectedKeys} /> : null}
        </li>
      ))}
    </ul>
  );
}

function NavMenuItem({ x, active }: { x: any; active: boolean }) {
  if (active) {
    return x.label;
  }
  return <Link href={x.href}>{x.label}</Link>;
}
