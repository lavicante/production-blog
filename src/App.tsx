import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { HomeAsync } from "./pages/Home/Home.async";
import { AboutAsync } from "./pages/About/About.async";
import { useTheme } from "./theme/useTheme";

export const App = () => {
  const { toggleTheme } = useTheme();
  return (
    <div className={`app`}>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <button className="btn" onClick={toggleTheme}>
        Change theme
      </button>

      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path={"/"} element={<HomeAsync />} />
          <Route path={"/about"} element={<AboutAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
