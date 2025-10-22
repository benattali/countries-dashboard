import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-brandBlue text-center m-4">
        Welcome to the worlds countries dashboard
      </h1>
      <main>
        <Dashboard />
      </main>
      <Footer />
    </>
  );
}

export default App;
