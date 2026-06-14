import { useTheme } from "../ThemeContext";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme("light")}>
        
      </button>

      <button onClick={() => setTheme("dark")}>
        
      </button>

      <button onClick={() => setTheme("cyber")}>
    
      </button>
    </div>
  );
}

export default ThemeSwitcher;