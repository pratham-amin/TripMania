import './Jammu.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { JammuImages } from "../../../media/jammu/JammuImages";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Jammu = () => {
    const placeInfo = [
        {
            placeName: "Jammu",
            tagline: "Jammu - The Land of Temples",
            desc: "Explore Jammu, a region known for its breathtaking landscapes, spiritual sanctuaries, and vibrant culture. From the sacred Vaishno Devi Temple to the scenic beauty of Patnitop, Jammu promises an unforgettable journey."
        }
    ];

    return (
        <>
            <div className="j-container">
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
                                    Discover Jammu’s spiritual essence, stunning landscapes, and historic charm. Whether it’s the revered shrines or the serene beauty of Patnitop, Jammu has something for every traveler.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="images module">
                        <div className="img1">
                            <img src={JammuImages.d1} alt="Vaishno Devi Temple" id="port1" />
                        </div>
                        <div className="img2">
                            <img src={JammuImages.d2} alt="Patnitop" id="port2" />
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
                            <img src={JammuImages.dh1} alt="Raghunath Temple" id="port1" />
                        </div>
                        <div className="img2">
                            <img src={JammuImages.d2} alt="Bahu Fort" id="port2" />
                        </div>
                    </div>
                    <div className="infobox module">
                        <div className="box">
                            <div className="title">
                                <h2>
                                    <span id="fdiff">E</span>xplore Historic Jammu
                                    <hr />
                                </h2>
                                <p>
                                    From the grand Raghunath Temple to the historic Bahu Fort, Jammu offers a perfect blend of spirituality, history, and scenic beauty.
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
                                    Book Your Jammu Trip
                                    <hr />
                                </h2>
                                <p>
                                    One step away from experiencing Jammu’s spiritual serenity and natural beauty! Book your trip today!
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