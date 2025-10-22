import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <h1 className="text-3xl font-bold text-brandBlue text-center m-4">
          Welcome to the world's countries dashboard
        </h1>
      </header>

      <main className="flex-grow flex flex-col">
        <Dashboard />
      </main>

      <Footer />
    </div>
  );
}

export default App;
