'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import useSWR from 'swr';
import { delay } from './delay';
import { useToast } from './useToast';

export function ClassList() {
  const { data, error, isLoading } = useSWR('/api/classes', fetcher);
  const { showError } = useToast();

  useEffect(() => {
    if (error) {
      showError(error);
    }
  }, [showError, error]);

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <div>
      {data && data.length
        ? data.map((item) => {
            const key = `/admin/classes/${item.name}`;
            return (
              <div key={key}>
                <Link href={key}>{item.name}</Link>
              </div>
            );
          })
        : 'Empty data'}
    </div>
  );
}

const fetcher = async (key: any) => {
  console.log('fetch:', key);
  await delay(1000);
  // throw new Error('something wrong!');
  return [
    { id: 1, name: 'users' },
    { id: 2, name: 'roles' },
    { id: 3, name: 'orgs' },
  ];
};
