'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactElement, useState } from 'react';

export function LeftNavMenu() {
  const path = usePathname();
  return (
    <>
      <AccordionMenu defaultSelectedKey={path}>
        <AccordionMenuItem key='/admin/classes' title='classes'>
          <div>---</div>
        </AccordionMenuItem>
        <AccordionMenuItem key='/admin/material' title='material'>
          <div>---</div>
        </AccordionMenuItem>
        <AccordionMenuItem key='/admin/banner' title='banner'>
          <div>---</div>
        </AccordionMenuItem>
      </AccordionMenu>
    </>
  );
}

function AccordionMenu({ children, defaultSelectedKey }: { children: React.ReactNode[]; defaultSelectedKey?: string }) {
  const [selectedKey, setSelectedKey] = useState(defaultSelectedKey);
  const isSelected = (key: string) => {
    return selectedKey && selectedKey.startsWith(key);
  };
  return (
    <>
      {children.map((child) => {
        const element = child as ReactElement<React.PropsWithChildren<{ title: string }>>;
        const item = { key: element.key!, title: element.props.title, children: element.props.children };
        return (
          <div key={item.key}>
            <div onClick={() => setSelectedKey(item.key)}>{item.title}</div>
            {isSelected(item.key) ? <div>{item.children}</div> : null}
          </div>
        );
      })}
    </>
  );
}

function AccordionMenuItem(props: React.PropsWithChildren<{ title: string }>) {
  return null;
}
