import React, {  useContext, useState } from 'react'
import authContext from '../context/auth/authContext';

const DepDash = () => {
  const context = useContext(authContext);
  const { token } = context
  const [formstate, setFormState] = useState({});
  const handleChange = (e) => {
    setFormState({
      ...formstate,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(token);
    try {
      const res = await fetch("http://localhost:8000/department/add-student", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(formstate)
      });
      console.log(res.status);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Add Student</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="roll_number" placeholder="Enter roll number" className="border p-3 rounded-lg" id="roll_number" onChange={handleChange}
        />
        <button
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          Add Roll Number
        </button>
      </form>
    </div>
  )
}

export default DepDash
