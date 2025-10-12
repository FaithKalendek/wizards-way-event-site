import { useEffect, useRef } from "react";
import "./GalleryPage.css"

/* Curator.io embed converted to React:
   - Place the feed container in the DOM and dynamically load the curator script on mount.
   - The script will populate the container with the feed. */

const GalleryPage = () => {
  const feedRef = useRef(null);

  useEffect(() => {
    const src = "https://cdn.curator.io/published/d6986d42-1f28-43e2-9de5-fae4aa69cbe1.js";
    // If the script is already present, don't add it again.
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.charset = "UTF-8";
      document.body.appendChild(script);
      return () => {
        // cleanup: remove the script and clear feed container
        if (script.parentNode) script.parentNode.removeChild(script);
        if (feedRef.current) feedRef.current.innerHTML = "";
      };
    }
    // If script already exists, no cleanup required here
    return undefined;
  }, []);

  return (
    <section className="page-section gallery-page">
      <h2 className="section-title">Gallery</h2>
      <p>Every witch, wizard, and muggle brings a little enchantment to Wizard’s Way!</p>
      <p>Tag your Instagram posts with #WizardsWay to see your memories appear in our gallery.</p>
      {/* Curator feed container (Curator will populate this element) */}
      <div id="curator-feed-default-feed-layout" ref={feedRef} style={{ marginTop: '3rem' }}>
        <a href="https://curator.io" target="_blank" rel="noopener noreferrer">Powered by Curator.io</a>
      </div>
    </section>
  );
}

export default GalleryPage;
