import { useState, useEffect, useContext } from "react";
import EditIcon from "../../../images/edit-icon.svg";
import NewCard from "./components/popup/NewCard/NewCard";
import EditAvatar from "./components/popup/Avatar/EditAvatar";
import EditProfile from "./components/popup/EditProfile/EditProfile";
import Popup from "./components/popup/Popup";
import ImagePopup from "./components/popup/ImagePopup/ImagePopup";
import Card from "./components/Card/Card";
import api from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Main() {
  const currentUser = useContext(CurrentUserContext);
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

  async function handleCardLike(card) {
    const isLiked = card.isLiked;
    await api
      .likeCard(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard,
          ),
        );
      })
      .catch((error) => console.error(error));
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
              src={EditIcon}
              className="profile-avatar-edit-button__icon"
              alt="Editar avatar"
            />
          </button>
          <img
            className="profile__image"
            src={currentUser.avatar}
            alt="Avatar"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">
            {currentUser.name || "Nombre de usuario"}
          </h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => {
              handleOpenPopup(editProfilePopup);
            }}
          ></button>
          <p className="profile__about">{currentUser.about || "Sobre mí"}</p>
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
              onCardLike={() => {
                handleCardLike(card);
                console.log("Ahhh Clickadaaa");
              }}
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
