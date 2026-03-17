import PageTitle from "../utils/PageTitle";

interface Props {
  className?: string | undefined;
  text: string;
}

function PageHeader({ className, text }: Props) {
  return (
    <header className="p-3">
      <PageTitle text={text} className={className} />
    </header>
  );
}

export default PageHeader;
