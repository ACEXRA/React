import React from "react";
import Sidebar from "./Components/Container/Sidebar/Sidebar";
import Content from "./Components/Container/Content/Content";
import './app.css'

function App() {

  return (
    <div className='main_layout'>
    <Content />
    <Sidebar />
    </div>
  );
}

export default App;
