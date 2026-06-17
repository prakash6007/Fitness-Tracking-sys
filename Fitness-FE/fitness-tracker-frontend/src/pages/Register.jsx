import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    role: ""
  });
  const navigate = useNavigate();

 const handleRegister = async (e) => {
  e.preventDefault();

  try {
    await API.post("/auth/register", form);

    alert("Registration Successful");

    navigate("/login");   // redirect here

  } catch (err) {
    console.error(err);
    alert("Registration Failed");
  }
};

  return (
    <div className="form-container">

      <form onSubmit={handleRegister}>

        <h2>Register</h2>

        <input
          className="form-control mb-3"
          placeholder="Full Name"
          value={form.fullName}
          onChange={(e) =>
            setForm({
              ...form,
              fullName: e.target.value
            })
          }
        />

        <input
          className="form-control mb-3"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value
            })
          }
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value
            })
          }
        />

        <select
  className="form-control mb-3"
  value={form.role}
  onChange={(e) =>
    setForm({
      ...form,
      role: e.target.value
    })
  }
>
  <option value="USER">USER</option>
  <option value="ADMIN">ADMIN</option>
</select>

        <button
          type="submit"
          className="btn btn-primary w-100"
        >
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;