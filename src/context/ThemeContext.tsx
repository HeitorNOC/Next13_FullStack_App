"use client";

import { ReactNode, createContext, useState } from "react";
interface ThemeProps {
  children: ReactNode
}
interface ThemeContextProps {
  toggle: () => void;
  mode: string;
}

export const ThemeContext = createContext<ThemeContextProps>({
  toggle: () => {},
  mode: "dark",
});

export default function ThemeProvider ({ children }: ThemeProps) {
  const [mode, setMode] = useState("dark");

  function toggle () {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  )
}