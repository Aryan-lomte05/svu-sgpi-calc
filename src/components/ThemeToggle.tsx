import React from "react";

export default function ThemeToggle({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (v: boolean) => void }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}

      className="fixed top-4 left-4 z-50 p-2 rounded-full bg-[#22252A] text-[#00FFD0] border border-[#00FFD0]"
      aria-label="Toggle dark mode"
    >
      {darkMode ? "🌙" : "🔆"}
    </button>
  );
}
