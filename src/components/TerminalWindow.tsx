import type { ReactNode } from "react";

export default function TerminalWindow({
  path,
  children,
}: {
  path: string;
  children: ReactNode;
}) {
  return (
    <div className="term-window">
      <div className="term-bar">
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="path">{path}</div>
        <div style={{ width: 40 }} />
      </div>
      <div className="term-body">{children}</div>
    </div>
  );
}
