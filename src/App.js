import React from "react";
import MainForm from "./components/MainForm/MainForm";
import CardList from "./components/CardList/CardList";
import styles from "./App.module.css";
import { CardProvider } from "./Contexts/CardContext";

function App() {
  return (
    <CardProvider>
      <div className={styles.main}>
        <h1 className={styles.header}>Site</h1>
        <MainForm />
        <CardList />
      </div>
    </CardProvider>
  );
}

export default App;
