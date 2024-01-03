'use client';

import Link from 'next/link';
import { useEffect, useMemo } from 'react';
import { dataProvider } from '../lib/dataProvider';
import useSWR from '../lib/swr';
import { useToast } from '../lib/useToast';

export function ClassList() {
  const { showError } = useToast();
  const { data: res, error, isLoading: isPending } = useSWR('getCollections', () => dataProvider.getCollections());
  const data = useMemo(() => res?.data || [], [res]);

  useEffect(() => {
    if (error) {
      showError(error);
    }
  }, [showError, error]);

  if (isPending) {
    return 'Loading...';
  }

  return (
    <div>
      {data.length
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
