import { SnackbarProvider } from "notistack";
import React, { useState } from "react";
import GlobalContextProvider from "../../globalRouters/globalContext/GlobalContextProvider";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import FeatureMenuLists from "../menus/FeatureMenuLists";
import "../afterLogin/AfterLoginDefaultLayout.css";

const AfterLoginDefaultLayout = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <>
      <SnackbarProvider hideIconVariant autoHideDuration={2000}>
        <GlobalContextProvider>
          <Header />

          {/* Mobile Menu Button */}
          <button
            className="btn btn-dark d-md-none m-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <div className="container-fluid">
            <div className="row position-relative">
              {menuOpen && (
                <aside
                  className="col-md-3 col-lg-2 min-vh-100 position-relative"
                  style={{ background: "#1d1939" }}
                >
                  <FeatureMenuLists />
                </aside>
              )}
              <button
                type="button"
                className="btn btn-info btn-sm position-absolute d-none d-md-block"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  top: "0px",
                  left: menuOpen ? "calc(16.47% - 0px)" : "0px",
                  zIndex: 1000,
                  width: "25px",
                  height: "50px",
                  padding: 0,
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  fontWeight: 500,
                }}
              >
                {menuOpen ? "HIDE" : "SHOW"}
              </button>

              <main
                className={menuOpen ? "col-md-9 col-lg-10 p-4" : "col-12 p-4"}
              >
                <Outlet />
              </main>
            </div>
          </div>

          <Footer />
        </GlobalContextProvider>
      </SnackbarProvider>
    </>
  );
};

export default AfterLoginDefaultLayout;
