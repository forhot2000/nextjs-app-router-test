'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export function DebugRender() {
  const path = usePathname();
  const createTime = useMemo(() => new Date().toISOString(), []);
  const updateTime = new Date().toISOString();
  return (
    <div className='debug'>
      <div>path: {path}</div>
      <div suppressHydrationWarning>created: {createTime}</div>
      <div suppressHydrationWarning>updated: {updateTime}</div>
    </div>
  );
}
