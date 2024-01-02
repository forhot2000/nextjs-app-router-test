'use client';

import Link from 'next/link';

const data = [
  { id: 1, name: 'documents' },
  { id: 2, name: 'photos' },
  { id: 3, name: 'app' },
];

export function MaterialTree() {
  return (
    <div>
      {data.map((item) => {
        const key = `/admin/material?folder=${item.id}`;
        return (
          <div key={key}>
            <Link href={key}>{item.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
