import EmailAndPassword from "../components/LoginSignup/EmailAndPassword";
import LoginButton from "../components/Login/LoginButton";
import RememberMe from "../components/LoginSignup/RememberMe";

function Page() {
  return (
    <div>
      <h1>Login adrenger</h1>
      <main>
        <EmailAndPassword />
        <RememberMe />
        <LoginButton />
      </main>
    </div>
  );
}

export default Page;
