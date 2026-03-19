async function Page({ params }: PageProps<"/join/[slug]">) {
  const { slug } = await params;
  const roomId = Number(slug);

  return <div>Join Page roomId: {roomId}</div>;
}

export default Page;
