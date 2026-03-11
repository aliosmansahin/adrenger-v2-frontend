"use client";

import EmailAndPassword from "./EmailAndPassword";
import RememberMe from "./RememberMe";
import LoginButton from "../Login/LoginButton";
import UnfilledLink from "../utils/UnfilledLink";
import { login } from "@/app/actions";
import { useActionState } from "react";

function LoginContainer() {
  const initialState = {
    message: "",
  };
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <div className="max-w-[20rem] p-3 select-none">
      <form action={formAction}>
        <h1 className="text-center text-[21px]">Login adrenger</h1>
        <main className="flex flex-col gap-4 pt-3">
          <section className="flex flex-col gap-3 border-y py-3 text-[18px]">
            <EmailAndPassword />
            <RememberMe />
          </section>
          <section className="flex flex-col gap-3 pt-3 text-[19px]">
            <LoginButton />
          </section>
          <section className="text-center text-[18px]">
            <UnfilledLink href="/signup">Sign Up</UnfilledLink>
          </section>
        </main>
      </form>
    </div>
  );
}

export default LoginContainer;
