export default function EditProfile() {
  return (
    <form className="popup__form" id="edit-profile-form" noValidate>
      <input
        id="name-input"
        className="popup__input popup__input_type_name"
        name="name"
        placeholder="Nombre"
        type="text"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="name-input-error popup__input-error"></span>
      <input
        id="about-input"
        className="popup__input popup__input_type_about"
        name="about"
        placeholder="Acerca de mí"
        type="text"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="about-input-error popup__input-error"></span>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
