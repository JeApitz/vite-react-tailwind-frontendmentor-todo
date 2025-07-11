import { useEffect, useState } from "react";
import { IconMoon } from "./icons/IconMoon";
import { IconSun } from "./icons/IconSun";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

export const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto max-w-xl px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold tracking-[0.3em] text-white uppercase">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconSun /> : <IconMoon />}
                </button>
            </div>
        </header>
    );
};
