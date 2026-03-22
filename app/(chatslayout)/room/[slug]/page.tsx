import Chat from "@/app/components/ChatsLayout/Chat";
import { ChatPagesProvider } from "@/app/context/ChatPagesContext";

async function Page({ params }: PageProps<"/room/[slug]">) {
  const { slug } = await params;
  const roomId = Number(slug);

  return (
    <ChatPagesProvider>
      <Chat roomId={roomId} />
    </ChatPagesProvider>
  );
}

export default Page;
