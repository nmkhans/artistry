import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    window.document.title =
      location.pathname === "/"
        ? "Artistry - Historical Articraft showcase"
        : `Artistry - ${location.pathname
            .slice(1)
            .split("-")
            .join(" ")}`;
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
