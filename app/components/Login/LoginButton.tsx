import FilledButton from "../utils/FilledButton";

interface ButtonProps {
  disabled?: boolean;
}

function LoginButton({ disabled = false }: ButtonProps) {
  return (
    <FilledButton type="submit" disabled={disabled}>
      LOGIN
    </FilledButton>
  );
}

export default LoginButton;
