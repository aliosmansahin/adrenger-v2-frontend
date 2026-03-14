"use client";

import EmailAndPassword from "./EmailAndPassword";
import RememberMe from "./RememberMe";
import LoginButton from "../Login/LoginButton";
import UnfilledLink from "../utils/UnfilledLink";
import { login } from "@/app/actions/auth";
import { startTransition, useActionState, useCallback } from "react";
import ErrorMessage from "../utils/ErrorMessage";

function LoginContainer() {
  const initialState = {
    message: "",
    success: true,
  };

  const [state, formAction, pending] = useActionState(login, initialState);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const rememberMe = formData.get("remember-me");
    localStorage.setItem("remember-me", rememberMe === "on" ? "on" : "off");

    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div className="max-w-[20rem] p-3 select-none">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-[21px]">Login adrenger</h1>
        <main className="flex flex-col gap-4 pt-3">
          <section className="flex flex-col gap-3 border-y py-3 text-[18px]">
            <EmailAndPassword />
            <RememberMe />
          </section>
          <section className="flex flex-col gap-3 pt-3 text-[19px]">
            <LoginButton disabled={pending} />
          </section>
          {!pending && !state?.success && (
            <section>
              <ErrorMessage message={state?.message} />
            </section>
          )}
          <section className="text-center text-[18px]">
            <UnfilledLink href="/signup">Sign Up</UnfilledLink>
          </section>
        </main>
      </form>
    </div>
  );
}

export default LoginContainer;
