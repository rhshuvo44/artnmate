import React, { ReactNode } from "react";

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export default function Div({ children, ...props }: DivProps) {
  return <div {...props}>{children}</div>;
}
