import './Goa.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { GoaImages } from "../../../media/goa/GoaImages";

import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Goa = () => {
    const placeInfo = [
        {
            placeName: "Goa",
            tagline: "The land of sun, sand, and sea",
            desc: "Experience the charm of Goa with its golden beaches, lively nightlife, delicious seafood, and rich Portuguese heritage. A perfect getaway for adventure and relaxation!",
        },
    ];
    
    
    return (
        <>
            <div className="g-container">
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
                                    Goa is calling! From golden beaches and beach shacks to water sports and vibrant festivals, get ready for an unforgettable escape. Dive into adventure and relaxation in India's favorite coastal paradise!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="images module">
                        <div className="img1">
                            <img src={GoaImages.d1} alt="Beach view" id="port1" />
                        </div>
                        <div className="img2">
                            <img src={GoaImages.d2} alt="Sunset in Goa" id="port2" />
                        </div>
                    </div>
                </div>
                <hr id="line" />
                <h2 className="heading" id="cultures">
                    <span id="fdiff">A</span>dventure & Water Sports
                    <hr />
                </h2>

                <div className="t-row">
                    <div className="images module">
                        <div className="img1">
                            <img src={GoaImages.dc1} alt="Jet Skiing" id="port1" />
                        </div>
                        <div className="img2">
                            <img src={GoaImages.dc2} alt="Parasailing" id="port2" />
                        </div>
                    </div>
                    <div className="infobox module">
                        <div className="box">
                            <div className="title">
                                <h2>
                                    <span id="fdiff">T</span>hrilling Water Sports
                                    <hr />
                                </h2>
                                <p>
                                    Experience the thrill of jet skiing, parasailing, and scuba diving along Goa’s scenic coastline. Perfect for adventure seekers looking to add excitement to their beach vacation!
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
                                    <span id="fdiff">T</span>op Beaches to Visit
                                    <hr />
                                </h2>
                                <p>
                                    From the lively Baga Beach to the serene Palolem Beach, explore Goa’s stunning coastline with crystal-clear waters and golden sands.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="images module">
                        <div className="img1">
                            <img src={GoaImages.db1} alt="Baga Beach" id="port1" />
                        </div>
                        <div className="img2">
                            <img src={GoaImages.db2} alt="Palolem Beach" id="port2" />
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
                                    Book Your Goa Trip
                                    <hr />
                                </h2>
                                <p>
                                    One step away from booking your beachside vacation! Don't miss out on the fun—reserve your spot today!
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
}

