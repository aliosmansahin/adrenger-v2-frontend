import JoinRoomForm from "@/app/components/JoinRoom/JoinRoomForm";
import PageHeader from "@/app/components/Pages/PageHeader";

async function Page({ params }: PageProps<"/join/[slug]">) {
  const { slug } = await params;
  const roomId = Number(slug);

  return (
    <div>
      <PageHeader text="Join Room" />
      <JoinRoomForm roomId={roomId} />
    </div>
  );
}

export default Page;
