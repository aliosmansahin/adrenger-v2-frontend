import Link from "next/link";
import { ReactNode } from "react";

interface LinkProps {
  href: string;
  className?: string | undefined;
  children: ReactNode;
}

function UnfilledLink({ href, className, children }: LinkProps) {
  return (
    <Link
      href={href}
      className={`text-blue-400 hover:text-blue-500 active:text-blue-700 ${className}`}
    >
      {children}
    </Link>
  );
}

export default UnfilledLink;
