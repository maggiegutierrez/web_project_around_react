import "../../index.css";

export default function ImagePopup(props) {
  const { src, caption } = props;
  return (
    <div className="popup__content popup__content_content_image">
      <img alt={caption} className="popup__image" src={src} />
      <p className="popup__caption">{caption}</p>
    </div>
  );
}
