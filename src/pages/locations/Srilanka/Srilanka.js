import './Srilanka.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { SrilankaImages } from "../../../media/srilanka/SrilankaImages";

import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const SriLanka = () => {
  const placeInfo = [
    {
      placeName: "Sri Lanka",
      tagline: "Pearl of the Indian Ocean",
      desc: "Experience the breathtaking landscapes, cultural heritage, and warm hospitality of Sri Lanka. From golden beaches to misty mountains, your adventure begins here!",
    },
  ];

  return (
    <>
      <div className="sr-container">
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
          <span id="diff">D</span>iscover Sri Lanka
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">P</span>lan Your Getaway
                  <hr />
                </h2>
                <p>
                  From the ancient ruins of Anuradhapura to the golden beaches of Mirissa, Sri Lanka offers a diverse and unforgettable travel experience.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={SrilankaImages.d1} alt="Sigiriya Rock" id="port1" />
            </div>
            <div className="img2">
              <img src={SrilankaImages.d2} alt="Mirissa Beach" id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="heritage">
          <span id="fdiff">H</span>eritage & Culture
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">A</span>ncient Wonders
                  <hr />
                </h2>
                <p>
                  Explore UNESCO heritage sites like the Dambulla Cave Temple and the historic city of Galle, where history comes alive.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={SrilankaImages.db1} alt="Dambulla Cave Temple" id="port1" />
            </div>
            <div className="img2">
              <img src={SrilankaImages.db2} alt="Galle Fort" id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="stays">
          <span id="fdiff">L</span>uxurious Stays
          <hr />
        </h2>
        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={SrilankaImages.dh1} alt="Beach Resort Sri Lanka" id="port1" />
            </div>
            <div className="img2">
              <img src={SrilankaImages.dh2} alt="Hill Country Retreat" id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">E</span>xquisite Comfort
                  <hr />
                </h2>
                <p>
                  Stay in beachfront villas, eco-lodges, or heritage bungalows nestled in the scenic landscapes of Sri Lanka.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="activities">
          <span id="fdiff">A</span>dventures & Experiences
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">T</span>hrilling Excursions
                  <hr />
                </h2>
                <p>
                  Go on an elephant safari, take a scenic train ride through the tea plantations, or surf the waves at Arugam Bay.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={SrilankaImages.do1} alt="Safari Sri Lanka" id="port1" />
            </div>
            <div className="img2">
              <img src={SrilankaImages.do2} alt="Train through Tea Plantations" id="port2" />
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
                Book Your Sri Lanka Trip
                <hr />
              </h2>

              <p>
                Get ready to explore lush landscapes, ancient temples, and golden shores. Book your Sri Lanka adventure today!
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
