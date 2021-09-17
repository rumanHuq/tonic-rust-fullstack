import { useEffect, useState } from "react";
import AppCss from "./App.module.scss";

function useDarkMode() {
 const [darkMode, setDarkMode] = useState(false);
 useEffect(() => {
  setDarkMode(window?.matchMedia?.("(prefers-color-scheme: dark)").matches || false);
 }, []);
 return darkMode;
}

export default function App() {
 const isDarkMode = useDarkMode();
 const theme = isDarkMode ? "dark" : "light";
 return (
  <section className={AppCss[`${theme}-app-container`]}>
   <nav>aaa</nav>
  </section>
 );
}
