"use client";

import { faLightbulb, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <>
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <FontAwesomeIcon icon={faLightbulb} />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <FontAwesomeIcon icon={faMoon} />
        </button>
      )}
    </>
  );
}
