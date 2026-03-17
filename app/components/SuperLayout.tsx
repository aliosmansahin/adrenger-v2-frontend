import { ReactNode } from "react";

function SuperLayout({ children }: { children: ReactNode }) {
  return (
    <div className="p-2 sm:max-w-150 sm:max-h-150 w-150 h-150">{children}</div>
  );
}

export default SuperLayout;
