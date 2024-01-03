'use client';

import { dataProvider } from '@/lib/dataProvider';
import useSWR from '@/lib/swr';
import { useToast } from '@/lib/useToast';
import Link from 'next/link';
import { useEffect, useMemo } from 'react';

export function MaterialTree() {
  const { showError } = useToast();
  const { data: res, error, isLoading } = useSWR(['classes', 'files'], () => dataProvider.find('files'));
  const data = useMemo(() => res?.data || [], [res]);

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
