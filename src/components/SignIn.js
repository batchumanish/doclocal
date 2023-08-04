import React, { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (isuser) {
      Auth.signIn(email, password)
        .then((user) => {
          setAuthLoading(false);
          setIsuser(true);
          setOverallcheck(true);

          localStorage.setItem("logintime", new Date().getTime());

          const usernameplusnumber = localStorage.getItem(
            "CognitoIdentityServiceProvider.44f8emil4gdq2fs933nhih863c.LastAuthUser"
          );
          const cognitogentoken = localStorage.getItem(
            "CognitoIdentityServiceProvider.44f8emil4gdq2fs933nhih863c." +
            usernameplusnumber +
            ".idToken"
          );
          localStorage.setItem("mytoken", cognitogentoken);
        })
        .catch((error) => {
          if (error?.message === "User is disabled.") {
            error.message =
              "You are yet to be activated. Please contact the administrator.";
          }
        });

      if (isuser) {
        window.location.replace(path);
      }
    }

    if (!email) {
      alert('email is required');
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span>{errors.name}</span>}
      </div> */}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignIn;
