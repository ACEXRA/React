import React, { useEffect, useState } from "react";
import "./Assets/Scss/app.scss";
import Content from "./Components/Container/Content/Content";
import Header from "./Components/Container/Header/Header";
import Loader from "./Widgets/Loader/Loader";

function App() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3800);
  }, []);

  return (
    <div className="main_layout">
      {loader ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Content />
        </>
      )}
    </div>
  );
}

export default App;
