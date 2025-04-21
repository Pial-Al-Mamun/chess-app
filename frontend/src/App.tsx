import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-gray-200">
        <div className="flex flex-row justify-between p-4">
          <div className="flex items-center gap-2">
            <svg
              className="fill-current text-white w-13 h-13 cursor-pointer"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 6h-4v4h4v4h-4v4h-4v-4H8v4H4v-4h4v-4H4V8h4V4h4v4h4V4h4v4z" />
              <path d="M8 8h4v4H8zm4 4h4v4h-4z" />
            </svg>
            <h1 className="font-sans hover:underline cursor-pointer text-gray-400 text-5xl pb-1">
              QuickChess
            </h1>
          </div>
          <div className="flex items-center gap-1.5">
            <Button
              asChild
              variant="ghost"
              className="text-lg px-6 text-gray-300 hover:text-gray-400"
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="text-lg px-6 bg-white text-black hover:bg-gray-500"
            >
              <Link to="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
