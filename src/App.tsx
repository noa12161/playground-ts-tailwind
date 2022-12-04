import React from "react";
import ReactQueryProvider from "./context/ReactQueryProvider";
import TestPage from "./pages/TestPage";
import Wrapper from "./tree/arborist/Wrapper";

function App() {
  return (
    <ReactQueryProvider>
      <TestPage />;
    </ReactQueryProvider>
  );
}

export default App;
