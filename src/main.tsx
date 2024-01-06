import './Api/firebase';
import App from './App';
import 'antd/dist/reset.css';
import 'assets/styles/MainStyles.scss';
import 'assets/styles/reset-styles.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persister } from 'store/store';

const root = createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persister} loading={null}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);
