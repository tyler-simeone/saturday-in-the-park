import React, { useState } from "react";

const Login = (props) => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });

  // Update state whenever an input field is edited
    const handleFieldChange = (evt) => {
      const stateToChange = { ...credentials };
      stateToChange[evt.target.id] = evt.target.value;
      setCredentials(stateToChange);
    };

  const handleLogin = (e) => {
    e.preventDefault();

    return fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    }).then(resp => resp.json())
    .then(parsedResp => sessionStorage.setItem("Token", parsedResp.token))
    .then(props.history.push("/"));
  };

  return (
    
    <form onSubmit={handleLogin} method="POST">
      <fieldset>
        <h3>Please sign in</h3>
        <div className="formgrid">

          <label htmlFor="username">Username:</label>
          
          <input
            onChange={handleFieldChange}
            type="text"
            id="username"
            placeholder="username"
            required=""
            autoFocus=""
          />

          <label htmlFor="inputPassword">Password</label>
          
          <input
            onChange={handleFieldChange}
            type="password"
            id="password"
            placeholder="Password"
            required=""
          />

        </div>
        <button type="submit">Sign in</button>
      </fieldset>
    </form>
  );
};

export default Login;
