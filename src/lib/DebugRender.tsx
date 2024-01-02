'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function DebugRender() {
  const path = usePathname();
  const [createTime, updateTime] = useCreateAndUpdateTime();
  return (
    <div className='debug'>
      <div>path: {path}</div>
      <div>created: {createTime}</div>
      <div>updated: {updateTime}</div>
    </div>
  );
}

function useCreateAndUpdateTime() {
  const [createTime, setCreateTime] = useState('');
  const [updateTime, setUpdateTime] = useState('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const now = new Date().toISOString();
    setCreateTime((prev) => prev || now);
    setUpdateTime(now);
  });
  return [createTime, updateTime] as const;
}
