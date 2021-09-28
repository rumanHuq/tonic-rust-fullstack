import { useEffect, useState } from "react";
import AppCss from "./App.module.scss";

function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    setDarkMode(window?.matchMedia?.("(prefers-color-scheme: dark)").matches || false);
  }, []);
  return [darkMode, setDarkMode] as const;
}

export default function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const theme = darkMode ? "dark" : "light";
  return (
    <section className={AppCss[`${theme}-app-container`]}>
      <nav>!!!!!!!!!</nav>
      <button type="button" onClick={() => setDarkMode(!darkMode)}>
        toggle
      </button>
    </section>
  );
}
