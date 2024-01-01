import { delay } from '@/lib/delay';
import React from 'react';

export default async function Page() {
  const label = await getData();
  return (
    <div>
      <div>{label} - slug</div>
      <div>@{new Date().toISOString()}</div>
    </div>
  );
}

async function getData() {
  await delay(100);
  return 'accordion-menu';
}
