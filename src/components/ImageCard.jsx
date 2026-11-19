import { ArrowUpRight } from "lucide-react";

function ImageCard({ image }) {
  return (
    <article className="image-card">
      <div className="image-card__media">
        <img
          src={image.url}
          alt={image.title}
          loading="lazy"
        />
        <span className="image-card__category">{image.category}</span>
        <a
          className="image-card__link"
          href={image.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${image.title} image in a new tab`}
        >
          <ArrowUpRight size={18} />
        </a>
      </div>

      <div className="image-card__content">
        <h2>{image.title}</h2>
        <p>{image.description}</p>
      </div>
    </article>
  );
}

export default ImageCard;
