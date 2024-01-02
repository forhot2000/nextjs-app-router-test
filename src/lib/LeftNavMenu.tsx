'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactElement, useState } from 'react';

export function LeftNavMenu({ classesData }: { classesData: any[] }) {
  const path = usePathname();
  return (
    <>
      <AccordionMenu defaultSelectedKey={path}>
        <AccordionMenu.Item key='/admin/classes' title='classes'>
          <ClassList data={classesData} />
        </AccordionMenu.Item>
        <AccordionMenu.Item key='/admin/material' title='material'>
          <div>---</div>
        </AccordionMenu.Item>
        <AccordionMenu.Item key='/admin/banner' title='banner'>
          <div>---</div>
        </AccordionMenu.Item>
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
            <div className='accordion-handler' onClick={() => setSelectedKey(item.key)}>
              <Link href={item.key}>{item.title}</Link>
            </div>
            {isSelected(item.key) ? <div className='accordion-panel'>{item.children}</div> : null}
          </div>
        );
      })}
    </>
  );
}

AccordionMenu.Item = function AccordionMenuItem(props: React.PropsWithChildren<{ title: string }>) {
  return null;
};

function ClassList({ data }: { data: any[] }) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
