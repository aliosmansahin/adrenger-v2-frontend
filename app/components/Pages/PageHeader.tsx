import MenuToggle from "../Menu/MenuToggle";
import PageTitle from "../utils/PageTitle";

interface Props {
  className?: string | undefined;
  text: string;
}

function PageHeader({ className, text }: Props) {
  return (
    <header className="px-3 border-b h-13 flex gap-5 items-center">
      <span className="inline sm:hidden">
        <MenuToggle />
      </span>
      <PageTitle text={text} className={className} />
    </header>
  );
}

export default PageHeader;
