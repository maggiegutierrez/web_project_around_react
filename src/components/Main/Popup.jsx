import "../../index.css";

export default function Popup(props) {
  //los hijos son el contenido de la ventana emergente
  const { onClose, title, children } = props;

  return (
    <div className="popup" id="edit-popup">
      <div className="popup__content">
        <button
          aria-label="Cerrar ventana emergente"
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}
