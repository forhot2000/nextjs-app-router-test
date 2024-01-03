import { HeadNavMenu } from './HeadNavMenu';
import { delay } from '../lib/delay';

export async function HeadNav() {
  const links = await getHeadNavData();
  return <HeadNavMenu data={links} />;
}

async function getHeadNavData() {
  await delay(100);

  return [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Admin', href: '/admin' },
  ];
}

// // prettier-ignore
// const items = [
//   {
//     label: 'Home', href: '/', children: [
//       { label: 'XXX', href: '/xxx' },
//     ]
//   },
//   {
//     label: 'Admin', href: '/admin', children: [
//       { label: 'Classes', href: '/admin/classes' },
//       { label: 'Material', href: '/admin/material' },
//       { label: 'Banner', href: '/admin/banner' },
//       { label: 'XXX', href: '/admin/xxx' },
//     ]
//   },
// ];
