import React from "react";

function RememberMe() {
  return (
    <div>
      <input className="size-4 mx-3" id="remember-me" type="checkbox" />
      <label
        className="hover:text-blue-500 hover:cursor-pointer"
        htmlFor="remember-me"
      >
        Remember Me
      </label>
    </div>
  );
}

export default RememberMe;
