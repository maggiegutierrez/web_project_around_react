export default function EditAvatar() {
  return (
    <form className="popup__form" id="edit-profile-image-form" noValidate>
      <input
        id="image-change-input"
        className="popup__input popup__input_type_image-link"
        name="avatar"
        placeholder="Enlace a la imagen"
        type="url"
        required
      />
      <span className="image-change-input-error popup__input-error"></span>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
