import Button from "../utils/Button";

interface ButtonProps {
  disabled?: boolean;
}

function LoginButton({ disabled = false }: ButtonProps) {
  return (
    <Button type="submit" disabled={disabled}>
      LOGIN
    </Button>
  );
}

export default LoginButton;
