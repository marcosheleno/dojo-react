import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { namespaces } from './i18n/i18n.constants';
import ContactsPage from './pages/ContactsPage';
import LandPage from './pages/LandPage';
import MessagesPage from './pages/MessagesPage';
import { TReducers } from './store/reducers';
import './styles/global.css';
function App() {
    const { t, i18n } = useTranslation(namespaces.pages.contacts);

    const changeLanguage = (language: string) => () => {
        i18n.changeLanguage(language);
    };
    const id = useSelector((state: TReducers) => state.page.id);

    if (id) {
        return <MessagesPage contactId={id} />;
    }
    return (
        <>
            {/* {console.log(t("groups"))}
      <button>{(t("button.send", { ns: namespaces.common }))}</button>
      <button onClick={changeLanguage("en")}>English</button>
      <button onClick={changeLanguage("pt")}>Español</button> */}
            <ContactsPage />;
            <LandPage />
        </>
    );
}

export default App;
