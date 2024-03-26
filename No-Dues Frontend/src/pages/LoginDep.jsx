import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authState, userTypeValues} from "../context/auth/authState";
import { useNavigate } from "react-router-dom";

const LoginDep = () => {
  const [formstate, setFormState] = useState({});
  const setAuth = useSetRecoilState(authState);
  const navigator = useNavigate()

  const handleChange = (e) => {
    setFormState({
      ...formstate,
      [e.target.id]: e.target.value,
    });
  };

  const handleDepPOST = async (e) => {
    e.preventDefault();
    try {
      const host = "http://localhost:8000";

      const response = await fetch(`${host}/department/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formstate.username,
          password: formstate.password,
        }),
      });

      if (response.ok) {
        const { token } = await response.json();

        setAuth({
          isAuthenticated: true,
          token: token,
          userType: userTypeValues.department
        });
        console.log("Login successful");
        navigator('/dues')
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">
        Department Login
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleDepPOST}>
        <input
          type="username"
          placeholder="Username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginDep;
