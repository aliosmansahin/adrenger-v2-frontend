import InputField from "../utils/InputField";
import InputWithLabel from "../utils/InputWithLabel";

function EmailAndPassword() {
  return (
    <>
      <InputWithLabel
        type="email"
        label="Email"
        name="email"
        id="email-input"
      />
      <InputWithLabel
        type="password"
        label="Password"
        name="password"
        id="password-input"
      />
    </>
  );
}

export default EmailAndPassword;
