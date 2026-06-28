import './Rajasthan.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { RajasthanImages } from "../../../media/rajasthan/RajasthanImages";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Rajasthan = () => {
    const placeInfo = [
        {
            placeName: "Rajasthan",
            tagline: "The Land of Kings",
            desc: "Discover Rajasthan, a realm of royal heritage and stunning landscapes. From the golden dunes of Jaisalmer to the majestic palaces of Jaipur, embark on an unforgettable journey."
        }
    ];

    return (
        <>
            <div className="r-container">
                {placeInfo.map((place) => (
                    <TravelCard
                        name={place.placeName}
                        tagline={place.tagline}
                        desc={place.desc}
                    />
                ))}
            </div>

            <div className="t-info">
                
                <hr id="line" />
                <h2 className="heading" id="heritage">
                    <span id="fdiff">H</span>eritage & Culture
                    <hr />
                </h2>

                <div className="t-row">
                    <div className="images module">
                        <div className="img1">
                            <img src={RajasthanImages.dh1} alt="Historic Fort" id="port1" />
                        </div>
                        <div className="img2">
                            <img src={RajasthanImages.dh2} alt="Royal Palace" id="port2" />
                        </div>
                    </div>
                    <div className="infobox module">
                        <div className="box">
                            <div className="title">
                                <h2>
                                    <span id="fdiff">E</span>xplore the Majesty
                                    <hr />
                                </h2>
                                <p>
                                    Experience the grandeur of Rajasthan's forts and palaces, from Mehrangarh Fort in Jodhpur to the City Palace in Udaipur. Dive into the rich history and culture of the royal era.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr id="line" />

                <h2 className="heading" id="cuisine">
                    <span id="fdiff">T</span>raditional Cuisine
                    <hr />
                </h2>
                <div className="t-row">
                    <div className="images module">
                        <div className="img1">
                            <img src={RajasthanImages.d1} alt="Rajasthani Cuisine" id="port1" />
                        </div>
                        <div className="img2">
                            <img src={RajasthanImages.d2} alt="Local Dishes" id="port2" />
                        </div>
                    </div>
                    <div className="infobox module">
                        <div className="box">
                            <div className="title">
                                <h2>
                                    <span id="fdiff">S</span>avor the Flavors
                                    <hr />
                                </h2>
                                <p>
                                    Indulge in authentic Rajasthani cuisine like Dal Baati Churma, Laal Maas, and Ghewar. Experience the royal flavors passed down through generations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr id="line" />

                <div className="container5" id="contact">
                    <section className="t-contact">
                        <h1>Book Your Trip Now</h1>
                        <div className="rowlast">
                            <div className="contimg">
                                <img src={contactimg} alt="Contact us" id="contimg" />
                            </div>
                            <div className="box">
                                <h2>
                                    Start Your Rajasthan Journey
                                    <hr />
                                </h2>
                                <p>
                                    Plan your perfect getaway to Rajasthan. Witness the grandeur, history, and beauty of this royal land.
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
