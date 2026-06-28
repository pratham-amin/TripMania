import './Europe.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { EuropeImages } from "../../../media/europe/EuropeImages";

import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Europe = () => {
  const placeInfo = [
    {
      placeName: "Europe",
      tagline: "Timeless Charm & Culture",
      desc: "Explore Europe, where history meets modern elegance. From romantic cities to stunning countryside, discover the essence of travel across the continent.",
    },
  ];

  return (
    <>
      <div className="eu-container">
        {placeInfo.map((place) => (
          <TravelCard
            name={place.placeName}
            tagline={place.tagline}
            desc={place.desc}
          />
        ))}
      </div>

      <div className="t-info">
        <h2>
          <span id="diff">E</span>urope Awaits
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">P</span>lan the Ultimate Eurotrip
                  <hr />
                </h2>
                <p>
                  From the Eiffel Tower in Paris to the canals of Venice, Europe promises timeless beauty, cultural treasures, and unforgettable experiences in every country.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={EuropeImages.d1} alt="Eiffel Tower" id="port1" />
            </div>
            <div className="img2">
              <img src={EuropeImages.d2} alt="Venetian Canal" id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="landmarks">
          <span id="fdiff">I</span>conic Landmarks
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">M</span>ust-See Marvels
                  <hr />
                </h2>
                <p>
                  Visit the Colosseum in Rome, the Acropolis in Athens, or the fairytale castles of Germany. Europe is home to some of the world’s most awe-inspiring sights.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={EuropeImages.db1} alt="Colosseum Rome" id="port1" />
            </div>
            <div className="img2">
              <img src={EuropeImages.db2} alt="Neuschwanstein Castle" id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="hotels">
          <span id="fdiff">S</span>tays & Escapes
          <hr />
        </h2>
        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={EuropeImages.dc1} alt="Château in France" id="port1" />
            </div>
            <div className="img2">
              <img src={EuropeImages.dc2} alt="Alpine Lodge" id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">E</span>legant Accommodations
                  <hr />
                </h2>
                <p>
                  Stay in charming B&Bs, luxurious châteaus, or scenic alpine lodges that offer more than just a place to sleep—they’re part of your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="activities">
          <span id="fdiff">E</span>xperiences
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">C</span>ultural & Culinary Journeys
                  <hr />
                </h2>
                <p>
                  Savor fresh pasta in Italy, dance through Spain’s flamenco, or sip wine through the vineyards of France—Europe’s charm is in its local experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={EuropeImages.dh1} alt="Italian Pasta Dish" id="port1" />
            </div>
            <div className="img2">
              <img src={EuropeImages.dh2} alt="Spanish Flamenco" id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />
      </div>

      <div className="container5" id="contact">
        <section className="t-contact">
          <h1>Book Your Tickets</h1>
          <div className="rowlast">
            <div className="contimg">
              <img src={contactimg} alt="Contact us" id="contimg" />
            </div>

            <div className="box">
              <h2>
                Book Your Europe Trip
                <hr />
              </h2>

              <p>
                Get ready to wander cobblestone streets, gaze at ancient cathedrals, and live the European dream. Book your journey today!
              </p>
              <Link to="/book">
                <div className="btn">
                  <button className="book-btn">Book now</button>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
