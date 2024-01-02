'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export type AccordionMenuItemProps = {
  key: string;
  children: React.ReactNode;
  title: string;
};

export type AccordionMenuProps = {
  children: React.ReactElement<AccordionMenuItemProps>[];
  defaultSelectedKey?: string;
};

export function AccordionMenu({ children, defaultSelectedKey }: AccordionMenuProps) {
  const [selectedKey, setSelectedKey] = useState(defaultSelectedKey);
  const isSelected = (key: string) => {
    return selectedKey && selectedKey.startsWith(key);
  };
  return (
    <>
      {children.map((child) => {
        const item = { key: child.key!, title: child.props.title, children: child.props.children };
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

AccordionMenu.Item = function AccordionMenuItem(props: AccordionMenuItemProps) {
  return null;
};
