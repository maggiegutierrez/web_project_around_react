export default function NewCard(props) {
  return (
    <form className="popup__form" id="new-card-form" noValidate>
      <input
        id="place-input"
        className="popup__input popup__input_type_card-name"
        name="placeName"
        placeholder="Título"
        minLength="2"
        maxLength="30"
        required
        type="text"
      />
      <span className="place-input-error popup__input-error"></span>
      <input
        id="link-input"
        className="popup__input popup__input_type_url"
        name="link"
        placeholder="Enlace a la imagen"
        required
        type="url"
      />
      <span className="link-input-error popup__input-error"></span>
      <button className="button popup__button" type="submit" disabled>
        Crear
      </button>
    </form>
  );
}
