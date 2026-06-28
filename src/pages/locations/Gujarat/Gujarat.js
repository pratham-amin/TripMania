import './Gujarat.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { GujaratImages } from "../../../media/gujrat/GujaratImages";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Gujarat = () => {
    const placeInfo = [
        {
            placeName: "Gujarat",
            tagline: "Vibrant Gujarat - The Land of Legends",
            desc: "Explore Gujarat, a state known for its rich cultural heritage, diverse landscapes, and historic wonders. From the white sands of the Rann of Kutch to the spiritual aura of Somnath Temple, Gujarat promises an unforgettable journey."
        }
    ];

    return (
        <>
            <div className="gu-container">
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
                                    Discover Gujarat’s vibrant traditions, majestic temples, and breathtaking landscapes. Whether it’s the architectural wonders of Ahmedabad or the wildlife of Gir, Gujarat has something for every traveler.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="images module">
                        <div className="img1">
                            <img src={GujaratImages.d1} alt="Rann of Kutch" id="port1" />
                        </div>
                        <div className="img2">
                            <img src={GujaratImages.d2} alt="Gir National Park" id="port2" />
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
                            <img src={GujaratImages.dh1} alt="Somnath Temple" id="port1" />
                        </div>
                        <div className="img2">
                            <img src={GujaratImages.d2} alt="Statue of Unity" id="port2" />
                        </div>
                    </div>
                    <div className="infobox module">
                        <div className="box">
                            <div className="title">
                                <h2>
                                    <span id="fdiff">E</span>xplore Historic Gujarat
                                    <hr />
                                </h2>
                                <p>
                                    From the sacred Somnath Temple to the awe-inspiring Statue of Unity, Gujarat offers a rich blend of spirituality, history, and modern marvels.
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
                                    Book Your Gujarat Trip
                                    <hr />
                                </h2>
                                <p>
                                    One step away from experiencing Gujarat’s grand heritage and stunning landscapes! Book your trip today!
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
