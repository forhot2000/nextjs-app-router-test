import { Footer } from '@/lib/Footer';
import { HeadNav } from '@/lib/HeadNav';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className='layout'>
          <div className='layout-top'>
            <HeadNav />
          </div>
          {children}
          <div className='layout-bottom'>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
