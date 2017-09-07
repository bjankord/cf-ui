import React from 'react';
import { createComponent } from 'cf-style-container';

const ArrowRendererWrapper = createComponent(({ theme, isOpen }) => ({
  borderColor: isOpen
    ? `transparent transparent ${theme.colorGray}`
    : `${theme.colorGray} transparent transparent`,
  borderWidth: isOpen ? `0 5px 5px` : '5px 5px 2.5px',
  borderStyle: 'solid',
  display: 'inline-block',
  height: 0,
  width: 0,
  position: 'relative',
  top: isOpen ? '-2px' : 0
}));

export default function arrowRenderer({ onMouseDown }) {
  return <ArrowRendererWrapper onMouseDown={onMouseDown} />;
}
