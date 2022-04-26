import AppRouter from "./app-router/AppRouter";
import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import BlogContextProvider from "./context/BlogContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BlogContextProvider>
          <AppRouter />
        </BlogContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
