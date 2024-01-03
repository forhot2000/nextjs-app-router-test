'use client';

import { usePathname } from 'next/navigation';
import { AccordionMenu } from './AccordionMenu';
import { BannerMenu } from './BannerMenu';
import { ClassList } from './ClassList';
import { MaterialTree } from './MaterialTree';

export function LeftNavMenu() {
  const path = usePathname();
  return (
    <>
      <AccordionMenu defaultSelectedKey={path}>
        <AccordionMenu.Item key='/admin/classes' title='classes'>
          <ClassList />
        </AccordionMenu.Item>
        <AccordionMenu.Item key='/admin/material' title='material'>
          <MaterialTree />
        </AccordionMenu.Item>
        <AccordionMenu.Item key='/admin/banner' title='banner'>
          <BannerMenu />
        </AccordionMenu.Item>
      </AccordionMenu>
    </>
  );
}
