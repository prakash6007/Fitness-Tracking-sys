import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await API.post(
      "/auth/login",
      {
        email,
        password
      }
    );

    alert("Login Successful");

    console.log(response.data);

    navigate("/profile");

  } catch (err) {
    alert("Login Failed");
  }
};

  return (
    <div className="form-container">

      <form onSubmit={handleLogin}>

        <h2>Login</h2>

        <input
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="btn btn-success w-100"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;