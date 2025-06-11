import React, { useEffect } from "react";
import api from "./api";

function App() {
  useEffect(() => {
    api.get("/services")
      .then((res) => {
        console.log("Services:", res.data);
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to EasyService</h1>
    </div>
  );
}

export default App;
