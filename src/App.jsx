import { useState } from "react";
import logo from "../images/logo.svg";
import avatar from "../images/avatar.jpg";
import "./index.css";

function App() {
  return (
    <div className="page__content">
      <header className="header page__section">
        <img
          src={logo}
          alt="Around the U.S logo"
          className="logo header__logo"
        />
      </header>
      <main className="content">
        <section className="profile page__section">
          <div className="profile__overlay">
            <button
              aria-label="Editar avatar"
              className="profile-avatar-edit-button"
              type="button"
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
            ></button>
            <p className="profile__about">...</p>
          </div>
          <button
            aria-label="Agregar tarjeta"
            className="profile__add-button"
            type="button"
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
      </main>
      <footer className="footer page__section">
        <p className="footer__copyright">© 2025 Around The U.S.</p>
      </footer>
    </div>
  );
}

export default App;
