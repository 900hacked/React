import { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("red");

  //   if (email === "") {
  //     setColor("red");
  //     setMessage("Email is required");
  //   } else if (password === "") {
  //     setColor("red");
  //     setMessage("Password is required");
  //   } else if (password.length < 6) {
  //     setColor("red");
  //     setMessage("Password must be at least 6 characters");
  //   }

  //   setColor("green");
  //   setMessage("Login successful!");

  const sEmail = (e) => {
    setEmail(e.target.value);
    if (email === "") {
      console.log("The email is empty");
    }
  };

  const sPassword = (e) => {
    setPassword(e.target.value);
    if (password === "") {
      console.log("the password is empty");
    }
  };

  const hSubmit = (e) => {
    e.preventDefault();
    alert(password);
  };

  return (
    <>
      <div>
        <h2>Login Form</h2>

        <form onSubmit={hSubmit}>
          <label>Email:</label>
          <br />
          <input type="text" value={email} onChange={(e) => sEmail(e)} />
          <br />
          <br />

          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => sPassword(e)}
          />
          <br />
          <br />

          <button type="submit">Login</button>
        </form>

        <p>Current email : {email}</p>
        <p>Current Password: {password}</p>

        <p style={{ color: color }}>{message}</p>
      </div>
    </>
  );
}
export default Login;
