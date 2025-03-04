import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvide } from "./context/AuthContext";
import { useEffect, useState, createContext } from "react";
import Loading from "./components/Loading";

// Create Speech Context
export const SpeechContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [isSpeechEnabled, setIsSpeechEnabled] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <SpeechContext.Provider value={{ isSpeechEnabled, setIsSpeechEnabled }}>
      <AuthProvide>
        <Navbar />

        {/* Speech Toggle Button */}
        <button
  onClick={() => setIsSpeechEnabled((prev) => !prev)}
  className={`fixed top-4 right-4 px-4 py-2 font-medium rounded-lg shadow-md transition-all duration-300 
    ${isSpeechEnabled ? "bg-red-600 hover:bg-red-700 text-white" : "bg-green-600 hover:bg-green-700 text-white"}`}
>
  {isSpeechEnabled ? "Disable Speech" : "Enable Speech"}
</button>

        <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
          <Outlet />
        </main>

        <Footer />
      </AuthProvide>
    </SpeechContext.Provider>
  );
}

export default App;
