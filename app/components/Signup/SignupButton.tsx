import Button from "../utils/Button";

interface ButtonProps {
  disabled?: boolean;
}

function SignupButton({ disabled = false }: ButtonProps) {
  return (
    <Button type="submit" disabled={disabled}>
      SIGN UP
    </Button>
  );
}

export default SignupButton;
