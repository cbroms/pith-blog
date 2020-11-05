export default function ColorMode() {
    const setDark = () => {
        window.localStorage.setItem("pith-color-mode", "dark");
        document.documentElement.style.setProperty(
            "--background-color",
            "var(--dark-dark)"
        );
        document.documentElement.style.setProperty(
            "--reading-color",
            "var(--mid-dark)"
        );
        document.documentElement.style.setProperty(
            "--heading-text",
            "var(--mid-light)"
        );
        document.documentElement.style.setProperty(
            "--body-text",
            "var(--dark-light)"
        );
        document.documentElement.style.setProperty(
            "--logo-color",
            "var(--light-light)"
        );
    };

    const setLight = () => {
        window.localStorage.setItem("pith-color-mode", "light");
        document.documentElement.style.setProperty(
            "--background-color",
            "var(--mid-light)"
        );
        document.documentElement.style.setProperty(
            "--reading-color",
            "var(--light-light)"
        );
        document.documentElement.style.setProperty(
            "--heading-text",
            "var(--mid-dark)"
        );
        document.documentElement.style.setProperty(
            "--body-text",
            "var(--mid-dark)"
        );
        document.documentElement.style.setProperty(
            "--logo-color",
            "var(--black)"
        );
    };

    const mode = window.localStorage.getItem("pith-color-mode");
    if (mode === "dark") setDark();
    else if (mode === "light") setLight();
    else {
        const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (dark) setDark();
        else setLight();
    }
    return (
        <div>
            <div id="light-square" onClick={() => setLight()} />
            <div id="dark-square" onClick={() => setDark()} />
        </div>
    );
}
