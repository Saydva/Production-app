import React, { useState } from "react";
import { Link } from "react-router";

function NavBar(props) {
  const sendDataToApp = props.handleDataFromNavBar;

  let [count, setCount] = useState(1);

  const changeTheme = () => {
    handleClick();
    setCount(count + 1);
    if (count >= 2) {
      setCount(0);
    }
  };

  function handleClick() {
    sendDataToApp(count);
  }

  function close() {
    var drop = document.querySelector(".dropdown");
    drop.removeAttribute("open");
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <details className="dropdown">
          <summary
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </summary>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100  border-2 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li
              onClick={close}
              className="border-2 border-slate-500 rounded-lg m-1"
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={close}
              className="border-2 border-slate-500 rounded-lg m-1"
            >
              <Link to="/buildPage">Build data</Link>
            </li>
            <li
              onClick={close}
              className="border-2 border-slate-500 rounded-lg m-1"
            >
              <Link to="/test">Test</Link>
            </li>
          </ul>
        </details>
      </div>
      <div className="navbar-center">
        <Link to="/">
          <p className="btn btn-ghost text-xl text-red-400">Production App</p>
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        <button className="btn btn-ghost btn-circle" onClick={changeTheme}>
          <div className="indicator">
            <svg
              className="swap-off h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
