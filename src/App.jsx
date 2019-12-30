import React from "react";
import "./App.css";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "./stores";
import { CharacterProvider, AccordionProvider } from "./providers";
import { Router } from "./Router";

export const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <CharacterProvider>
        <AccordionProvider>
          <Router />
        </AccordionProvider>
      </CharacterProvider>
    </PersistGate>
  </Provider>
);
