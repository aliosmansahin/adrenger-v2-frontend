import FilledButton from "../utils/FilledButton";
import InputWithLabel from "../utils/InputWithLabel";

function CreateRoomForm() {
  return (
    <form action="">
      <div className="grow text-[18px] flex flex-col mt-3">
        <span>* Indicates optional field</span>
        <div className="flex flex-col border-b gap-3 pb-3 my-3">
          <InputWithLabel
            placeholder="Enter room name"
            name="room-name"
            id="room-name-input"
            label="Room Name"
            required
          />
          <InputWithLabel
            placeholder="Enter room password"
            name="room-password"
            id="room-password-input"
            label="Room Password*"
          />
        </div>
        <FilledButton type="submit">CREATE ROOM</FilledButton>
      </div>
    </form>
  );
}

export default CreateRoomForm;
