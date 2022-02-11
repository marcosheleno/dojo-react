import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './i18n/i18n';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <React.Suspense fallback={<>Loading...</>}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </React.Suspense>
    </Provider>,
    document.getElementById('root')
);
