import React from 'react';
import { useSelector } from 'react-redux';
import ContactsPage from './pages/ContactsPage';
import LandPage from './pages/LandPage';
import MessagesPage from './pages/MessagesPage';
import { TReducers } from './store/reducers';
import './styles/global.css';
function App() {
    const id = useSelector((state: TReducers) => state.page.id);

    
    const locales:any = {
        en: 'English',
        fr: 'French',
        ar: 'Arabic',
        de: 'German',
        zh: 'Chinese'
    }
    locale: navigator.language

    if (id) {
        return <MessagesPage contactId={id} />;
    }
    return (
        <>
            <select>
          {Object.keys(locales).map((key) => {
            return <option value={key} key={key}>{locales[key]}</option>
          })}
        </select>
            <ContactsPage />;
            <LandPage />
        </>
    );
}

export default App;
