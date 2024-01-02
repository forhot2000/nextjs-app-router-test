import { LeftNav } from '@/lib/LeftNav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='layout layout-horizental'>
      <div className='layout-left'>
        <LeftNav />
      </div>
      <div className='layout-content'>{children}</div>
    </div>
  );
}
