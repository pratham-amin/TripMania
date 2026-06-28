import './Thailand.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { ThailandImages } from "../../../media/thailand/ThailandImages";

import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Thailand = () => {
  const placeInfo = [
    {
      placeName: "Thailand",
      tagline: "Same Same, But Different",
      desc: "Discover Thailand, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
    },
  ];

  return (
    <>
      <div className="th-container">
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
          <span id="diff">E</span>verything you need to know
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Trip!
                  <hr />
                </h2>
                <p>
                  Whether you're exploring the bustling streets of Bangkok, relaxing on the beaches of Phuket, or discovering the rich culture of Chiang Mai, Thailand has something for every traveler.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={ThailandImages.d1} alt="Bangkok City" id="port1" />
            </div>
            <div className="img2">
              <img src={ThailandImages.d2} alt="Phuket Beach" id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="beaches">
          <span id="fdiff">T</span>emples & Spiritual Sites
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">S</span>acred & Serene
                  <hr />
                </h2>
                <p>
                  Discover iconic temples such as Wat Arun and Wat Pho, where Thai architecture and spirituality create a truly enchanting experience.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={ThailandImages.db1} alt="Wat Arun Temple" id="port1" />
            </div>
            <div className="img2">
              <img src={ThailandImages.db2} alt="Wat Pho Temple" id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="hotels">
          <span id="fdiff">H</span>ospitality & Stays
          <hr />
        </h2>
        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={ThailandImages.dh1} alt="Luxury Hotel Bangkok" id="port1" />
            </div>
            <div className="img2">
              <img src={ThailandImages.dh2} alt="Beach Resort Phuket" id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">S</span>tay in Style
                  <hr />
                </h2>
                <p>
                  Choose from world-class hotels, boutique resorts, and scenic beachfront villas that make your stay in Thailand unforgettable.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">T</span>hings to Do
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">A</span>dventures Await
                  <hr />
                </h2>
                <p>
                  From Thai cooking classes and floating markets to island hopping and scuba diving—Thailand offers endless fun and unique activities.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={ThailandImages.do1} alt="Floating Market" id="port1" />
            </div>
            <div className="img2">
              <img src={ThailandImages.do2} alt="Scuba Diving" id="port2" />
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
                Book Your Thailand Trip
                <hr />
              </h2>

              <p>
                One step away from exploring the vibrant streets, beautiful beaches, and rich culture of Thailand! Book your journey now!
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