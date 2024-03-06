import "./App.css";
import AppRouter from "./config/appRouter/appRouter";
import { AuthProvider } from "./config/providers/authProvider/authProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
}

export default App;
