interface Props {
  className?: string | undefined;
  text: string;
}

function PageTitle({ className, text }: Props) {
  return <h1 className={`text-[18px] font-bold ${className}`}>{text}</h1>;
}

export default PageTitle;
