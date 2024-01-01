import './globals.css';

export default function RootLayout({
  children,
  top,
  left,
}: {
  children: React.ReactNode;
  top: React.ReactNode;
  left: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className='layout'>
          <div className='layout-top'>{top}</div>
          <div className='layout layout-horizental'>
            <div className='layout-left'>{left}</div>
            <div className='layout-content'>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
