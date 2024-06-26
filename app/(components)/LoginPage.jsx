import React from "react";

const LoginPage = () => {
  return (
    <div>
      <div className="flex">
        <form
          className="flex w-1/2 flex-col gap-3 m-10 bg-secondary rounded-lg my-20"
          method="post"
        >
          <h3 id="card">Log in</h3>
          <label>Username: </label>
          <input
            id="username"
            placeholder="Chochko123"
            name="username"
            type="text"
            required={true}
          />
          <label>Password: </label>
          <input
            id="password"
            placeholder="pasword..."
            name="password"
            required={true}
          />
          <button>
            <input type="submit" value="Log in" />
          </button>
          <p>Do not have a profile?</p>
          <a href="/Signup">Sign up</a>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
