import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import DirectionsPage from "./pages/DirectionsPage.jsx";
import ActivitiesPage from "./pages/ActivitiesPage.jsx";
import CharitiesPage from "./pages/CharitiesPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {

  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/directions", element: <DirectionsPage /> },
    { path: "/activities", element: <ActivitiesPage /> },
    { path: "/charities", element: <CharitiesPage /> },
    { path: "/gallery", element: <GalleryPage /> },
    { path: "/contact", element: <ContactPage /> }
  ]);

  return (
    <div className="App">
      <nav className="NavBar">
        <div className="left-nav">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="M 12.023438 2 A 0.750075 0.750075 0 0 0 11.619141 2.1035156 L 2.1191406 7.6914062 A 0.75033057 0.75033057 0 1 0 2.8808594 8.984375 L 3 8.9140625 L 3 20.25 A 0.750075 0.750075 0 0 0 3.75 21 L 20.25 21 A 0.750075 0.750075 0 0 0 21 20.25 L 21 8.9140625 L 21.119141 8.984375 A 0.75033037 0.75033037 0 1 0 21.880859 7.6914062 L 12.380859 2.1035156 A 0.750075 0.750075 0 0 0 12.023438 2 z M 12 3.6210938 L 19.5 8.03125 L 19.5 19.5 L 16 19.5 L 16 11.75 A 0.750075 0.750075 0 0 0 15.25 11 L 8.75 11 A 0.750075 0.750075 0 0 0 8 11.75 L 8 19.5 L 4.5 19.5 L 4.5 8.03125 L 12 3.6210938 z M 9.5 12.5 L 14.5 12.5 L 14.5 19.5 L 9.5 19.5 L 9.5 12.5 z"></path>
            </svg>
          </a>
        </div>
        <div className="right-nav">
          <a href="/directions">Directions</a>
          <a href="/activities">Activities</a>
          <a href="/gallery">Gallery</a>
          <a href="/charities">Charities</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
      <div className="page-wrapper">{element}</div>
      <footer className="Footer">
        <span style={{ display: 'block', marginBottom: '0.5rem' }}>
          <a href="/contact" style={{ marginRight: '12px' }}>Contact</a>|
          <a href="/charities" style={{ marginLeft: '12px' }}>Charities</a>
        </span>
        <span style={{ fontSize: '0.95em', color: '#ffd700' }}>
          This is a fan-created event site for charitable purposes. Not affiliated with Warner Bros. or J.K. Rowling.
        </span>
      </footer>
    </div>
  );
}

export default App;
