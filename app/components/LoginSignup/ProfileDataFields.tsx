import InputWithLabel from "../utils/InputWithLabel";

function ProfileDataFields() {
  return (
    <>
      <InputWithLabel
        id="nickname-input"
        label="Nickname"
        name="nickname"
        type="text"
      />
      <InputWithLabel id="bio-input" label="Bio*" name="bio" type="text" />
    </>
  );
}

export default ProfileDataFields;
