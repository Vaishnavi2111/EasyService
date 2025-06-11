import React, { useEffect } from "react";
import API from "./services/api"; // ✅ Corrected path

function App() {
  useEffect(() => {
    API.get("/services")
      .then((res) => {
        console.log("Services:", res.data);
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  }, []);

  return (
    <div>
      <h1>Hyperlocal Frontend</h1>
    </div>
  );
}

export default App;
