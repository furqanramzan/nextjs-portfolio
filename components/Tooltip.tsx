'use client';

import { Tooltip as FlowbiteTooltip } from 'flowbite-react';

interface Props {
  content: string;
  children: JSX.Element;
}

export default function Tooltip({ content, children }: Props) {
  return <FlowbiteTooltip content={content}>{children}</FlowbiteTooltip>;
}
