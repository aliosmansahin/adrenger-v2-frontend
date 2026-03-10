import SignupButton from "../Signup/SignupButton";
import EmailAndPassword from "./EmailAndPassword";
import RememberMe from "./RememberMe";
import UnfilledLink from "../utils/UnfilledLink";

function SignupContainer() {
  return (
    <div className="max-w-[20rem] p-3 select-none">
      <form>
        <h1 className="text-center text-[21px]">Sign Up adrenger</h1>
        <main className="flex flex-col gap-4 pt-3">
          <section className="flex flex-col gap-3 border-y py-3 text-[18px]">
            <EmailAndPassword />
            {/* TODO: Add account data */}
            <RememberMe />
          </section>
          <section className="flex flex-col gap-3 pt-3 text-[19px]">
            <SignupButton />
          </section>
          <section className="text-center text-[18px]">
            <UnfilledLink href="/login">Login</UnfilledLink>
          </section>
        </main>
      </form>
    </div>
  );
}

export default SignupContainer;
