import { useState, useEffect } from "react";
import avatar from "../../../images/avatar.jpg";
import NewCard from "./components/popup/NewCard/NewCard";
import EditAvatar from "./components/popup/Avatar/EditAvatar";
import EditProfile from "./components/popup/EditProfile/EditProfile";
import Popup from "./components/popup/Popup";
import ImagePopup from "./components/popup/ImagePopup/ImagePopup";
import Card from "./components/Card/Card";
import api from "../../utils/api";

function Main() {
  //const [avatar, setAvatar] = useState(avatar);
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editAvatarPopup = { title: "Cambiar avatar", children: <EditAvatar /> };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(data);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__overlay">
          <button
            aria-label="Editar avatar"
            className="profile-avatar-edit-button"
            type="button"
            onClick={() => {
              handleOpenPopup(editAvatarPopup);
            }}
          >
            <img
              src="./images/edit-icon.svg"
              className="profile-avatar-edit-button__icon"
              alt="Editar avatar"
            />
          </button>
          <img className="profile__image" src={avatar} alt="Avatar" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">...</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => {
              handleOpenPopup(editProfilePopup);
            }}
          ></button>
          <p className="profile__about">...</p>
        </div>
        <button
          aria-label="Agregar tarjeta"
          className="profile__add-button"
          type="button"
          onClick={() => {
            handleOpenPopup(newCardPopup);
          }}
        ></button>
      </section>
      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleOpenPopup={handleOpenPopup}
            />
          ))}
        </ul>
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
