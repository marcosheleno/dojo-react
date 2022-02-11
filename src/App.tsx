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
    const { t } = useTranslation(namespaces.pages.contacts);

    const id = useSelector((state: TReducers) => state.page.id);

    if (id) {
        return <MessagesPage contactId={id} />;
    }
    return (
        <>
            <button>{t('buttons.send', { ns: namespaces.common })}</button>
            {/* <ContactsPage />;
            <LandPage /> */}
        </>
    );
}

export default App;
