import Link from "next/link";
import React, { ReactNode } from "react";

interface LinkProps {
  href: string;
  className?: string | undefined;
  children: ReactNode;
}

function FilledLink({ href, className, children }: LinkProps) {
  return (
    <Link
      href={href}
      className={`bg-blue-500 hover:bg-blue-600 active:bg-blue-800 hover:cursor-pointer disabled:bg-gray-500 disabled:cursor-default rounded-3xl py-1 ${className}`}
    >
      {children}
    </Link>
  );
}

export default FilledLink;
