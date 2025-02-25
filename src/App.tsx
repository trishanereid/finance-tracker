import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { LoginForm } from "./components/login-form";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
