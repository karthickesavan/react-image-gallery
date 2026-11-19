import { Camera, Sparkles } from "lucide-react";
import ImageCard from "./components/ImageCard.jsx";
import { images } from "./data/images.js";
import "./App.css";

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href={import.meta.env.BASE_URL} aria-label="Frame home">
          <span className="brand__mark"><Camera size={19} /></span>
          <span>frame<span className="brand__dot">.</span></span>
        </a>
        <span className="header-note">A little collection of everywhere</span>
      </header>

      <main className="page-shell">
        <section className="intro">
          <div className="eyebrow"><Sparkles size={14} /> THE VISUAL JOURNAL</div>
          <h1>Moments worth<br /><span>looking at.</span></h1>
          <p className="intro__copy">
            A curated collection of places, colours, and little details from around the world.
          </p>
          <div className="intro__meta">
            <span>SELECTED PHOTOGRAPHS</span>
            <span className="meta-line" />
            <span>{String(images.length).padStart(2, "0")} IMAGES</span>
          </div>
        </section>

        <section className="gallery-section" aria-label="Image gallery">
          <div className="section-heading">
            <div>
              <span className="section-kicker">THE COLLECTION</span>
              <h2>Explore the gallery</h2>
            </div>
            <span className="image-count">{images.length} photographs</span>
          </div>

          <div className="image-grid">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>FRAME. — REACT IMAGE GALLERY</span>
        <span>Built with React components &amp; curiosity.</span>
      </footer>
    </>
  );
}

export default App;
