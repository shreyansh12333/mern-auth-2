import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className=" bg-slate-300">
        <div className="max-w-6xl mx-auto flex  justify-between items-center p-3 ">
          <h1 className="font-bold"> Auth App</h1>
          <ul className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/sign-in">Sign in</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
