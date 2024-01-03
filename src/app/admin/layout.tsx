import { DebugAdminLayout } from '@/components/DebugAdminLayout';
import { DebugRender } from '@/components/DebugRender';
import { LeftNav } from '@/components/LeftNav';
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
