import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className=" max-w-lg mx-auto gap-4  p-3 ">
      <h1 className="font-bold mt-6 text-3xl text-center  ">Sign Up</h1>
      <form className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          id="username"
          placeholder="username"
          className="p-3 rounded-lg bg-slate-100"
        ></input>
        <input
          type="email"
          id="email"
          placeholder="email"
          className="p-3 rounded-lg bg-slate-100"
        ></input>
        <input
          type="text"
          id="password"
          placeholder="password"
          className="p-3 rounded-lg bg-slate-100"
        ></input>
        <button className="bg-slate-500 rounded-lg text-center p-3 uppercase text-white">
          Sign Up
        </button>
        <button className="bg-red-500 rounded-lg text-center p-3 uppercase text-white ">
          continue with google
        </button>
      </form>
      <p className="mt-3">
        Have an account?
        <Link to="/sign-in" className="text-blue-400 ">
          <span className="text-blue-400 ml-1"> Sign in</span>
        </Link>
      </p>
    </div>
  );
}
