import { ReactNode } from "react";
import MenuToggle from "../Menu/MenuToggle";
import PageTitle from "../utils/PageTitle";

interface Props {
  className?: string | undefined;
  text: string;
  children?: ReactNode | undefined;
}

function PageHeader({ className, text, children }: Props) {
  return (
    <header className="border-b h-13 flex items-center justify-between">
      <span className="flex gap-5 px-3 items-center">
        <span className="inline sm:hidden">
          <MenuToggle />
        </span>
        <PageTitle text={text} className={className} />
      </span>
      {children && (
        <span className="text-[20px] px-3 flex gap-3">{children}</span>
      )}
    </header>
  );
}

export default PageHeader;
