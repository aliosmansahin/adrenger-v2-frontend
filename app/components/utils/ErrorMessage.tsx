function ErrorMessage({ message }: { message: string }) {
  return (
    <p className="text-red-400 select-text text-center text-[17px]">
      {message}
    </p>
  );
}

export default ErrorMessage;
