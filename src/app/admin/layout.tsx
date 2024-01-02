import { DebugAdminLayout } from '@/lib/DebugAdminLayout';
import { DebugRender } from '@/lib/DebugRender';
import { LeftNav } from '@/lib/LeftNav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='layout layout-horizental'>
      <div className='layout-left'>
        <LeftNav />
        <DebugRender />
      </div>
      <div className='layout-content'>
        {children}
        <DebugAdminLayout />
      </div>
    </div>
  );
}
