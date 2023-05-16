import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/About";
import { HomePage } from "pages/Home";

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
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
