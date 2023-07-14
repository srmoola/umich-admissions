import { useState, useEffect } from "react";
import SignIn from "./components/SignIn";
import { auth } from "./firebase";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import MainScreen from "./components/MainScreen";

function App() {
  const [falseRender, setfalseRender] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setfalseRender(!falseRender), 2500);
  }, []);

  return (
    <>
      {!falseRender && <Loading />}
      {auth.currentUser ? (
        <>
          <NavBar />
          <MainScreen />
        </>
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default App;
