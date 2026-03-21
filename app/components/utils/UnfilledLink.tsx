import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

interface LinkProps {
  href: string;
  className?: string | undefined;
  children: ReactNode;
  onClick?: MouseEventHandler;
}

function UnfilledLink({ href, className, children, onClick }: LinkProps) {
  return (
    <Link
      href={href}
      className={`text-blue-400 hover:text-blue-500 active:text-blue-700 ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default UnfilledLink;
