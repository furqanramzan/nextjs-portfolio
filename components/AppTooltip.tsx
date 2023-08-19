'use client';

import { Tooltip } from 'flowbite-react';

interface Props {
  content: string;
  children: JSX.Element;
}

export default function AppTooltip({ content, children }: Props) {
  return <Tooltip content={content}>{children}</Tooltip>;
}
