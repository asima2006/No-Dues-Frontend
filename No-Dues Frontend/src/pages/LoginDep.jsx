import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginDep = () => {
  const [formstate, setFormState] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormState({
      ...formstate,
      [e.target.id]: e.target.value,
    });
  };

  const handleDepPOST = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/department/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formstate)
      });
      if (res.status == 200) navigate('/');
      else console.log("Invalid credentials!!");
    } catch (error) {
      console.log(error);
    }
  }


  // console.log(formstate);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Department Login</h1>
      <form className="flex flex-col gap-4" onSubmit={handleDepPOST}>
        <input
          type="username" placeholder="Username" className="border p-3 rounded-lg" id="username" onChange={handleChange}
        />
        <input
          type="password" placeholder="Password" className="border p-3 rounded-lg" id="password" onChange={handleChange}
        />
        <button
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginDep;
