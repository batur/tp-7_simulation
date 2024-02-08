import "./App.css";

import React from "react";
import { TP7Final } from "./components";

const App: React.FC = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "fit-content",
        }}
      >
        <TP7Final />
      </div>
    </>
  );
};

export default App;
