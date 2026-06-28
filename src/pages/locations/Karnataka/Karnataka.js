import './Karnataka.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { KarnatakaImages } from "../../../media/kerala/KarnatakaImages";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Karnataka = () => {
    const placeInfo = [
        {
            placeName: "Karnataka",
            tagline: "Karnataka - The Cradle of Stone Architecture",
            desc: "Explore Karnataka, a state rich in history, natural beauty, and architectural marvels. From the majestic palaces of Mysore to the ancient ruins of Hampi, Karnataka offers a journey through time and culture."
        }
    ];

    return (
        <>
            <div className="k-container">
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
                                    Discover Karnataka’s majestic heritage, lush landscapes, and timeless architecture. Whether it's the serenity of Coorg or the grandeur of Mysore Palace, Karnataka welcomes every traveler.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="images module">
                        <div className="img1">
                            <img src={KarnatakaImages.d1} alt="Mysore Palace" id="port1" />
                        </div>
                        <div className="img2">
                            <img src={KarnatakaImages.d2} alt="Coorg Hills" id="port2" />
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
                            <img src={KarnatakaImages.dh1} alt="Hampi Ruins" id="port1" />
                        </div>
                        <div className="img2">
                            <img src={KarnatakaImages.d2} alt="Gol Gumbaz" id="port2" />
                        </div>
                    </div>
                    <div className="infobox module">
                        <div className="box">
                            <div className="title">
                                <h2>
                                    <span id="fdiff">E</span>xplore Historic Karnataka
                                    <hr />
                                </h2>
                                <p>
                                    From the ancient ruins of Hampi to the architectural wonder of Gol Gumbaz, Karnataka is a treasure trove of historical landmarks and cultural heritage.
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
                                    Book Your Karnataka Trip
                                    <hr />
                                </h2>
                                <p>
                                    One step away from experiencing Karnataka’s grand history and natural charm! Book your trip today!
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
