import React from "react";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-brandBlue">
        Welcome to the worlds countries dashboard 🌎
      </h1>
      <main>
        <Dashboard />
      </main>
    </>
  );
}

export default App;
