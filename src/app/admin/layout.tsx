import { DebugAdminLayout } from '@/lib/DebugAdminLayout';
import { DebugRender } from '@/lib/DebugRender';
import { LeftNav } from '@/lib/LeftNav';
import { Suspense } from 'react';
import Loading from './loading';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='layout layout-horizental'>
      <div className='layout-left'>
        <Suspense fallback={<Loading />}>
          <LeftNav />
        </Suspense>
        <DebugRender />
      </div>
      <div className='layout-content'>
        {children}
        <DebugAdminLayout />
      </div>
    </div>
  );
}
