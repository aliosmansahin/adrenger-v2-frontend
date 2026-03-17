import PageTitle from "../utils/PageTitle";

interface Props {
  className?: string | undefined;
  text: string;
}

function PageHeader({ className, text }: Props) {
  return (
    <header className="px-3 border-b h-13 flex items-center">
      <PageTitle text={text} className={className} />
    </header>
  );
}

export default PageHeader;
