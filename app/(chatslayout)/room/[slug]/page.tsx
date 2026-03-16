import Chat from "@/app/components/ChatsLayout/Chat";

async function Page({ params }: PageProps<"/room/[slug]">) {
  const { slug } = await params;
  const roomId = Number(slug);

  return <Chat roomId={roomId} />;
}

export default Page;
