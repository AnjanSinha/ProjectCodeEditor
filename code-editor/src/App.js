import React from "react";
import ReactDOM from "react-dom"
import Home from "./components/WebEditorPage/Home";
import DataProvider from "./context/WebEditorPage/DataProvider";

function App() {
  return (
    <DataProvider>
      <Home/>
    </DataProvider>
  );
}

export default App;
