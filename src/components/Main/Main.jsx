import { useState } from "react";
import avatar from "../../../images/avatar.jpg";
import "../../index.css";
import NewCard from "../NewCard/NewCard";
import EditAvatar from "../Avatar/EditAvatar";
import EditProfile from "../EditProfile/EditProfile";
import Popup from "./Popup";

function Main() {
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
        <ul className="cards__list"></ul>
      </section>
      <template id="card-template">
        <li className="card">
          <img className="card__image" src="" alt="" />
          <button
            aria-label="Eliminar tarjeta"
            className="card__delete-button"
            type="button"
          ></button>
          <div className="card__description">
            <h2 className="card__title"></h2>
            <button
              aria-label="Botón Me gusta"
              className="card__like-button"
              type="button"
            ></button>
          </div>
        </li>
      </template>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
