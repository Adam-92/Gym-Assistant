import { useEffect, useState } from "react";
import { getCarouselCharacters } from "../../../services/Activity";
import { CharactersCarousel } from "src/model/Carousels.model";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import Carousel from "../../Carousels/Carousel/Carousel";
import "./WelcomeModal.css";

const WelcomeModal = () => {
  const [characters, setCharacters] = useState<CharactersCarousel[]>([]);
  const { currentUser } = useGlobalContext();

  useEffect(() => {
    getCarouselCharacters().then((data) => setCharacters(data));
  }, []);

  return (
    <article className="position-welcome-modal">
      <div className="message-welcome-modal">
        <h1>Welcome, {currentUser?.displayName}</h1>
        <p>Let us know what shape are you interested in.</p>
        <p>
          Don't worry at any time, you can change your targets in the settings
          tab.
        </p>
      </div>
      <Carousel characters={characters} />
    </article>
  );
};
export default WelcomeModal;
