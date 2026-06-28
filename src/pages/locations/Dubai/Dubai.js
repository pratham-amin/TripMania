import "./Dubai.css";
import { TravelCard } from "../../../components/locations/TravelCard";
import { DubaiImages } from "../../../media/dubai/d_images";

import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";
export const Dubai = () => {
  const placeInfo = [
    {
      placeName: "Dubai",
      tagline: "The land of the kings",
      desc: "Discover Dubai, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
    },
  ];

  return (
    <>
      <div className="du-container">
        {placeInfo.map((place) => {
          return (
            <TravelCard
              name={place.placeName}
              tagline={place.tagline}
              desc={place.desc}
            />
          );
        })}
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
                  Abu Dhabi is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={DubaiImages.d1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={DubaiImages.d2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />
        <h2 className="heading" id="cultures">
          <span id="fdiff">C</span>ultures
          <hr />
        </h2>

        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={DubaiImages.dc1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={DubaiImages.dc2} alt={""} id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">B</span>est Cultures
                  <hr />
                </h2>
                <p>
                  The culture of Dubai, an emirate of the United Arab Emirates.
                  The UAE culture mainly revolves around the religion of Islam
                  and traditional Arab culture. The influence of Islamic and
                  Arab culture on its architecture, music, attire, cuisine, and
                  lifestyle are very prominent as well.
                </p>
                <p>
                  Five times every day, Muslims are called to prayer from the
                  minarets of mosques which are scattered around the country.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="beaches">
          <span id="fdiff">B</span>eaches
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">B</span>est beaches to visit
                  <hr />
                </h2>
                <p>
                  Abu Dhabi is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={DubaiImages.db1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={DubaiImages.db2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />
        <h2 className="heading" id="hotels">
          <span id="fdiff">H</span>otels
          <hr />
        </h2>
        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={DubaiImages.dh1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={DubaiImages.dh2} alt={""} id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">T</span>op hotels for you
                  <hr />
                </h2>
                <p>
                  Abu Dhabi is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">O</span>nly in Dubai
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">I</span>nteresting things to do
                  <hr />
                </h2>
                <p>
                  Abu Dhabi is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={DubaiImages.do1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={DubaiImages.do2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />

        
      </div>
      <hr id="line" />
      
      <hr id="line" />

      <div className="container5" id="contact">
        <section className="t-contact">
          <h1>Book Your tickets</h1>
          <div className="rowlast">
            <div className="contimg">
              <img src={contactimg} alt={""} id="contimg" />
            </div>

            <div className="box">
              <h2>
                Book your tickets
                <hr />
              </h2>

              <p>
                One step away from booking your trip! What are you waiting for?
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
