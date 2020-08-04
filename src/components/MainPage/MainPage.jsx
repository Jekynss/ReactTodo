import React, { useState, useContext, Fragment } from "react";
import MainForm from "../../components/MainForm/MainForm";
import CardList from "../../components/CardList/CardList";
import styles from "./MainPage.module.css";
import { CardsContext } from "../../Contexts/CardsContext";
import {
  ModalMessage,
} from "../../components/ModalMessage/ModalMessage";

export function MainPage() {
  const [showModal, setShowModal] = useState(false);
  const {cards, setCards} = useContext(CardsContext);

  function handleNoButton(e) {
    setShowModal(false);
  }

  function handleDeleteButton(cards) {
    console.log(cards);
    setCards(cards.filter((elem)=>{return(elem.id!==showModal)}))
    setShowModal(false);
  }

  return (
    <Fragment>
      <ModalMessage showModal={showModal}>
        <div className={styles.main_modal}>
          <div className={styles.modal_container}>
            <h3 className={styles.modal_header}>
              Warning: changes may be irreversible
            </h3>
            <h1 className={styles.modal_content}>
              Are you sure you want to permanently delete this post
            </h1>
            <div className={styles.modal__buttons}>
              <button
                className={styles.modal__delete_button}
                onClick={() => handleDeleteButton(cards)}
              >
                Delete
              </button>
              <button
                className={styles.modal__no_button}
                onClick={handleNoButton}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </ModalMessage>
      <div className={styles.main}>
        <h1 className={styles.header}>Site</h1>
        <MainForm />
        <CardList setShowModal={setShowModal} />
      </div>
    </Fragment>
  );
}

export default MainPage;