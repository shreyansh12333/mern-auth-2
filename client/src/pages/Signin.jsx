import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/user";
import { useDispatch, useSelector } from "react-redux";

export default function Signin() {
  const [formData, setFormData] = useState({});
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        dispatch(signInFailure(data.error));

        // console.log(error);
        return;
      }

      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
  return (
    <div className=" max-w-lg mx-auto gap-4  p-3 ">
      <h1 className="font-bold mt-6 text-3xl text-center  ">Sign In</h1>
      <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
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
          {loading ? "Loading...." : "Sign In"}
        </button>
        <button className="bg-red-500 rounded-lg text-center p-3 uppercase text-white ">
          continue with google
        </button>
      </form>
      <p className="mt-3">
        Don't have an account?
        <Link to="/sign-up" className="text-blue-400 ">
          <span className="text-blue-400 ml-1"> Sign Up</span>
        </Link>
      </p>
      <p className="text-red-500 mt-5">
        {/* {console.log(error)} */}
        {/* {error ? || "Something went wrong" : ""} */}
        {error ? error : ""}
      </p>
    </div>
  );
}
