import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from "./App.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";

const router = createBrowserRouter([
  { path: "/", element: <StartPage /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

function App() {
  return <div style={{ color: "bl", padding: "2rem" }}>🛠️ Hello from App</div>;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
