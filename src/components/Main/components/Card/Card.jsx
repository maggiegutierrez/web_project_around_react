import ImagePopup from "../popup/ImagePopup/ImagePopup";

export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const handleOpenPopup = props.handleOpenPopup;
  const handleLikeClick = props.onCardLike;
  const ImageComponent = {
    title: null,
    children: <ImagePopup card={props.card} />,
  };
  const cardLikeButtonName = `card__like-button ${isLiked ? "card__like-button_is-active" : ""}`;

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => handleOpenPopup(ImageComponent)}
      />
      <button
        aria-label="Eliminar tarjeta"
        className="card__delete-button"
        type="button"
      ></button>
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Botón Me gusta"
          className={cardLikeButtonName}
          type="button"
          onClick={handleLikeClick}
        ></button>
      </div>
    </li>
  );
}
