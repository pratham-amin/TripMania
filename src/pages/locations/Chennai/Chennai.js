import './Chennai.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { ChennaiImages } from "../../../media/chennai/ChennaiImages";

import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Chennai = () => {
    const placeInfo = [
        {
            placeName: "Chennai",
            tagline: "The Gateway to South India",
            desc: "Experience Chennai, a city that blends traditional South Indian culture with a modern urban vibe. From Marina Beach to the grandeur of Kapaleeshwarar Temple, Chennai offers a unique mix of heritage, cuisine, and coastal charm."
        }
    ];

    return (
        <>
            <div className="che-container">
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
                                    Discover Chennai’s rich culture and coastal beauty! Enjoy its historic temples, lively markets, and scenic beaches.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="images module">
                        <div className="img1">
                            <img src={ChennaiImages.d1} alt="Temple" id="port1" />
                        </div>
                        <div className="img2">
                            <img src={ChennaiImages.d2} alt="Beach" id="port2" />
                        </div>
                    </div>
                </div>
                <hr id="line" />
                <h2 className="heading" id="heritage">
                    <span id="fdiff">H</span>eritage & Landmarks
                    <hr />
                </h2>

                <div className="t-row">
                    <div className="images module">
                        <div className="img1">
                            <img src={ChennaiImages.dh1} alt="Kapaleeshwarar Temple" id="port1" />
                        </div>
                        <div className="img2">
                            <img src={ChennaiImages.dh2} alt="Fort St. George" id="port2" />
                        </div>
                    </div>
                    <div className="infobox module">
                        <div className="box">
                            <div className="title">
                                <h2>
                                    <span id="fdiff">E</span>xplore Historic Chennai
                                    <hr />
                                </h2>
                                <p>
                                    Walk through Chennai’s historical sites, from ancient temples to colonial-era landmarks, showcasing its diverse cultural heritage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr id="line" />

                <div className="container5" id="contact">
                    <section className="t-contact">
                        <h1>Book Your Tickets</h1>
                        <div className="rowlast">
                            <div className="contimg">
                                <img src={contactimg} alt="Contact us" id="contimg" />
                            </div>
                            <div className="box">
                                <h2>
                                    Book Your Chennai Trip
                                    <hr />
                                </h2>
                                <p>
                                    Experience Chennai’s charm! Reserve your spot today and explore its heritage and stunning coastline.
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
            </div>
        </>
    );
};
