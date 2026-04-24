import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import api from "../utils/api";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserData().then((data) => {
      setCurrentUser(data);
    });
  }, []);

  const handleUpdateUser = (data) => {
    api.patchUserData(data).then((newData) => {
      setCurrentUser(newData);
    });
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
