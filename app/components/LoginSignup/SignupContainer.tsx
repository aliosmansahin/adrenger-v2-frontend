"use client";

import SignupButton from "../Signup/SignupButton";
import EmailAndPassword from "./EmailAndPassword";
import RememberMe from "./RememberMe";
import UnfilledLink from "../utils/UnfilledLink";
import ProfileDataFields from "./ProfileDataFields";
import { startTransition, useActionState } from "react";
import { signup } from "@/app/actions";
import ErrorMessage from "../utils/ErrorMessage";

function SignupContainer() {
  const initialState = {
    message: "",
    success: true,
  };

  const [state, formAction, pending] = useActionState(signup, initialState);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div className="max-w-[20rem] p-3 select-none">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-[21px]">Sign Up adrenger</h1>
        <main className="flex flex-col gap-4 pt-3">
          <section className="flex flex-col gap-3 border-y py-3 text-[18px]">
            <span>* Indicates optional field</span>
            <EmailAndPassword />
            <ProfileDataFields />
            <RememberMe />
          </section>
          <section className="flex flex-col gap-3 pt-3 text-[19px]">
            <SignupButton disabled={pending} />
          </section>
          {!pending && !state?.success && (
            <section>
              <ErrorMessage message={state?.message} />
            </section>
          )}
          <section className="text-center text-[18px]">
            <UnfilledLink href="/login">Login</UnfilledLink>
          </section>
        </main>
      </form>
    </div>
  );
}

export default SignupContainer;
