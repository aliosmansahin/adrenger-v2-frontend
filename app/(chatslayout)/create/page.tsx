import CreateRoomForm from "@/app/components/CreateRoom/CreateRoomForm";
import PageHeader from "@/app/components/Pages/PageHeader";

function Page() {
  return (
    <div className="w-full h-full flex flex-col">
      <PageHeader text="Create Room" />
      <CreateRoomForm />
    </div>
  );
}

export default Page;
