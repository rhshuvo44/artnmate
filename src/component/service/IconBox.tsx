import React from 'react';
import parse from 'html-react-parser';
import Div from '@/component/ui/Div';
import Image from 'next/image';

export default function IconBox({ title, subtitle, icon }:{
    title: string;
    subtitle: string;
    icon: string;
}) {
  return (
    <Div className="cs-iconbox cs-style1 text-center">
      <Div className="cs-iconbox_icon">
        <Image width={100} height={100} src={icon} alt="Icon" />
      </Div>
      <h2 className="cs-iconbox_title">{parse(title)}</h2>
      <Div className="cs-iconbox_subtitle">{parse(subtitle)}</Div>
    </Div>
  );
}
