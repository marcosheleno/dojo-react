import React from "react";
import { useSelector } from "react-redux";
import ContactsPage from "./pages/ContactsPage";
import LandPage from "./pages/LandPage";
import MessagesPage from "./pages/MessagesPage";
import { TReducers } from "./store/reducers";
import "./styles/global.css";
function App() {
  const id = useSelector((state: TReducers) => state.page.id);

  if (id) {
    return <MessagesPage id = {id}/>;
  }
  return (
    <>
      <ContactsPage />;
      <LandPage />
    </>
  );
}

export default App;
