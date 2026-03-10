import InputWithLabel from "../utils/InputWithLabel";

function ProfileDataFields() {
  return (
    <>
      <InputWithLabel
        id="nickname-input"
        label="Nickname"
        name="nickname"
        placeholder="Enter a nickname you want to use"
        type="text"
      />
      <InputWithLabel
        id="bio-input"
        label="Bio*"
        name="bio"
        type="text"
        placeholder="Enter your bio"
      />
    </>
  );
}

export default ProfileDataFields;
