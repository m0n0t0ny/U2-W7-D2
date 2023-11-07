window.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const toggleDarkButton = document.getElementById("toggleDark");

  if (toggleDarkButton) {
    toggleDarkButton.onclick = function () {
      html.classList.toggle("dark");
      setDarkTheme(html.classList.contains("dark"));
    };
  }

  loadThemeStyle();
});

const loadThemeStyle = () => {
  const html = document.documentElement;
  const themeInStorage = localStorage.getItem("dark");

  if (themeInStorage) {
    html.classList.toggle("dark");
  }
};

const setDarkTheme = (isDark) => {
  if (isDark) {
    localStorage.setItem("dark", "true");
  } else {
    localStorage.removeItem("dark");
  }
};
