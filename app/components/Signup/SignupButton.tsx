import FilledButton from "../utils/FilledButton";

interface ButtonProps {
  disabled?: boolean;
}

function SignupButton({ disabled = false }: ButtonProps) {
  return (
    <FilledButton type="submit" disabled={disabled}>
      SIGN UP
    </FilledButton>
  );
}

export default SignupButton;
