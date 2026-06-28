import './Russia.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { RussiaImages } from "../../../media/russia/RussiaImages";

import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Russia = () => {
  const placeInfo = [
    {
      placeName: "Russia",
      tagline: "Land of Tsars and Traditions",
      desc: "Explore Russia's grand history, breathtaking architecture, and stunning landscapes. From Moscow's Red Square to Siberia's wild beauty, an unforgettable journey awaits!",
    },
  ];

  return (
    <>
      <div className="ra-container">
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
          <span id="diff">D</span>iscover Russia
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">P</span>lan Your Adventure
                  <hr />
                </h2>
                <p>
                  From the historic streets of St. Petersburg to the vast landscapes of Siberia, Russia offers a unique and diverse travel experience.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={RussiaImages.d1} alt="Moscow Red Square" id="port1" />
            </div>
            <div className="img2">
              <img src={RussiaImages.d2} alt="Lake Baikal" id="port2" />
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
                  <span id="fdiff">A</span>rchitectural Marvels
                  <hr />
                </h2>
                <p>
                  Witness the iconic onion domes of St. Basil's Cathedral, the grandeur of the Hermitage Museum, and the historical treasures of the Kremlin.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={RussiaImages.dh1} alt="St. Basil's Cathedral" id="port1" />
            </div>
            <div className="img2">
              <img src={RussiaImages.dh2} alt="Hermitage Museum" id="port2" />
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
              <img src={RussiaImages.dp2} alt="Luxury Hotel Moscow" id="port1" />
            </div>
            <div className="img2">
              <img src={RussiaImages.dp1} alt="Traditional Wooden Lodge" id="port2" />
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
                  Stay in elegant five-star hotels in Moscow or experience a cozy retreat in traditional wooden lodges in the countryside.
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
                  Take a ride on the Trans-Siberian Railway, experience the Northern Lights in Murmansk, or ski in the Caucasus Mountains.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={RussiaImages.do1} alt="Trans-Siberian Railway" id="port1" />
            </div>
            <div className="img2">
              <img src={RussiaImages.do2} alt="Northern Lights Murmansk" id="port2" />
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
                Book Your Russia Trip
                <hr />
              </h2>

              <p>
                Embark on an unforgettable journey through Russia's vast landscapes, historic cities, and vibrant culture. Book your trip today!
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
