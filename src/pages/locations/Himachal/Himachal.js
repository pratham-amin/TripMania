import './Himachal.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { HimachalImages } from "../../../media/himachal/HimachalImages";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Himachal = () => {
    const placeInfo = [
        {
            placeName: "Himachal Pradesh",
            tagline: "The Land of Snowy Mountains",
            desc: "Explore Himachal Pradesh, a paradise for nature lovers and adventure enthusiasts. From the tranquil valleys of Manali to the spiritual aura of Dharamshala, immerse yourself in breathtaking landscapes and thrilling experiences."
        }
    ];

   
    return (
        <>
            <div className="hi-container">
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
                                    Get ready to explore the enchanting landscapes of Himachal Pradesh! Whether you seek adventure, peace, or cultural exploration, this region has it all.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="images module">
                        <div className="img1">
                            <img src={HimachalImages.dh1} alt="Snowy Peaks" id="port1" />
                        </div>
                        <div className="img2">
                            <img src={HimachalImages.dh2} alt="Scenic View" id="port2" />
                        </div>
                    </div>
                </div>
                <hr id="line" />
                <h2 className="heading" id="heritage">
                    <span id="fdiff">T</span>rekking & Adventure
                    <hr />
                </h2>

                <div className="t-row">
                    <div className="images module">
                        <div className="img1">
                            <img src={HimachalImages.d1} alt="Trekking Path" id="port1" />
                        </div>
                        <div className="img2">
                            <img src={HimachalImages.d2} alt="Mountain Adventure" id="port2" />
                        </div>
                    </div>
                    <div className="infobox module">
                        <div className="box">
                            <div className="title">
                                <h2>
                                    <span id="fdiff">A</span>dventure Awaits!
                                    <hr />
                                </h2>
                                <p>
                                    Explore the best trekking routes in Himachal, from the Triund trek in Dharamshala to the challenging Hampta Pass trek. Experience the thrill of camping under the starry sky.
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
                                    Plan Your Himachal Trip
                                    <hr />
                                </h2>
                                <p>
                                    Don't miss out on the beauty of Himachal Pradesh. Book now and get ready for an unforgettable journey!
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