import './Uttarkhand.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { UttarakhandImages } from "../../../media/uttarakhand/UttarkhandImages";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Uttarakhand = () => {
    const placeInfo = [
        {
            placeName: "Uttarakhand",
            tagline: "Uttarakhand - The Land of Gods",
            desc: "Discover Uttarakhand, where the Himalayas meet spirituality. From the sacred banks of the Ganga in Haridwar to the snow-capped peaks of Auli, Uttarakhand is a haven for nature lovers and pilgrims alike."
        }
    ];

    return (
        <>
            <div className="u-container">
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
                                    Explore Uttarakhand’s spiritual heritage, majestic mountains, and serene valleys. Whether you're drawn to Rishikesh’s yoga retreats or Mussoorie’s colonial charm, there’s something for everyone.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="images module">
                        <div className="img1">
                            <img src={UttarakhandImages.d1} alt="Haridwar Ghat" id="port1" />
                        </div>
                        <div className="img2">
                            <img src={UttarakhandImages.d2} alt="Auli Hills" id="port2" />
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
                            <img src={UttarakhandImages.db1} alt="Kedarnath Temple" id="port1" />
                        </div>
                        <div className="img2">
                            <img src={UttarakhandImages.db2} alt="Valley of Flowers" id="port2" />
                        </div>
                    </div>
                    <div className="infobox module">
                        <div className="box">
                            <div className="title">
                                <h2>
                                    <span id="fdiff">E</span>xplore Historic Uttarakhand
                                    <hr />
                                </h2>
                                <p>
                                    From the sacred Kedarnath Temple to the breathtaking Valley of Flowers, Uttarakhand is a blend of divinity, nature, and adventure.
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
                                    Book Your Uttarakhand Trip
                                    <hr />
                                </h2>
                                <p>
                                    One step away from experiencing Uttarakhand’s divine tranquility and majestic beauty! Book your trip today!
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
