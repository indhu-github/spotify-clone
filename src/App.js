import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState(null);

  //Run code based on a givem condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log("I HAVE A TOKEN>>>", _token);
  }, []);

  return (
    <div className="App">{token ? <h1>I am logged in</h1> : <Login />}</div>
  );
}

export default App;
