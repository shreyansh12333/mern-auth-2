import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import OAuth from "../components/OAuth";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      navigate("/sign-in");
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className=" max-w-lg mx-auto gap-4  p-3 ">
      <h1 className="font-bold mt-6 text-3xl text-center  ">Sign Up</h1>
      <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          placeholder="username"
          className="p-3 rounded-lg bg-slate-100"
          onChange={handleChange}
        ></input>
        <input
          type="email"
          id="email"
          placeholder="email"
          className="p-3 rounded-lg bg-slate-100"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          id="password"
          placeholder="password"
          className="p-3 rounded-lg bg-slate-100"
          onChange={handleChange}
        ></input>
        <button
          className="bg-slate-500 rounded-lg text-center p-3 uppercase text-white"
          disabled={loading}
        >
          {loading ? "Loading...." : "Sign up"}
        </button>
        <OAuth />
      </form>
      <p className="mt-3">
        Have an account?
        <Link to="/sign-in" className="text-blue-400 ">
          <span className="text-blue-400 ml-1"> Sign in</span>
        </Link>
      </p>
      <p className="text-red-500 mt-5">{error && "Something went wrong"}</p>
    </div>
  );
}
