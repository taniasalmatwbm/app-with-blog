import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./contextApi/theme";
import InitialLoader from "./loader/InitialLoader";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          console.log(userData);
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  //console.log(loading);

  const [themeMode, setThemeMode] = useState("dark");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode); // mainly responsible for changing ui
  }, [themeMode]);

  return (
    <>
      {loading ? (
        <InitialLoader />
      ) : (
        <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
          <div className="min-h-screen flex flex-wrap content-between bg-slate-200">
            <div className="w-full block">
              <Header />
              <main className="bg-slate-50 h-4/5 dark:bg-customBlack">
                <Outlet />
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;

// agr Register hua h to login krte hi data getCurrent user se data le kr
// dispatch  krwa de gy redux ko
// ig nhi to logout show hu ga redux mein
