'use client';

import Link from 'next/link';

export function ClassList({ data }: { data: any[] }) {
  return (
    <div>
      {data.map((item) => {
        const key = `/admin/classes/${item.name}`;
        return (
          <div key={key}>
            <Link href={key}>{item.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
